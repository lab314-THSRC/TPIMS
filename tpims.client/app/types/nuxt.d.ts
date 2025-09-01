// types/nuxt.d.ts
import type { IAuthService, ITestService } from '~/services'
declare module '#app' {
  interface NuxtApp {
    $auth: IAuthService
    $test: ITestService
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $auth: IAuthService
    $test: ITestService
  }
}
export {}
