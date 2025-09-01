// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import child_process from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { env } from 'node:process'

const baseFolder =
  env.APPDATA !== undefined && env.APPDATA !== ''
    ? `${env.APPDATA}/ASP.NET/https`
    : `${env.HOME}/.aspnet/https`

const certificateName = 'tpims.client'
const certFilePath = path.join(baseFolder, `${certificateName}.pem`)
const keyFilePath = path.join(baseFolder, `${certificateName}.key`)

if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder, { recursive: true })
}

if (
  (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) &&
  0 !==
    child_process.spawnSync(
      'dotnet',
      ['dev-certs', 'https', '--export-path', certFilePath, '--format', 'Pem', '--no-password'],
      { stdio: 'inherit' },
    ).status
) {
  throw new Error('Could not create certificate.')
}

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(';')[0]
    : 'https://localhost:7268'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  components: [{ path: '@/components', pathPrefix: false }],
  devtools: {
    enabled: false,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    'shadcn-nuxt',
  ],
  app: {
    head: {
      title: 'TPIMS',
    },
  },
  colorMode: {
    classSuffix: '',
  },
  css: ['~/assets/css/tailwind.css'],
  devServer: {
    port: 58348,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      open: true,
      proxy: {
        '^/api': {
          target,
          secure: false,
        },
      },
      https: {
        key: fs.readFileSync(keyFilePath),
        cert: fs.readFileSync(certFilePath),
      },
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
