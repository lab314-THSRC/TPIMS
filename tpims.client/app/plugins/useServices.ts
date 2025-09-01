// plugins/useServices.ts
import { TestService } from '~/services/modules/Test'
import { AuthService } from '~/services/modules/Auth'


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('auth', new AuthService())
  nuxtApp.provide('test', new TestService())
})
