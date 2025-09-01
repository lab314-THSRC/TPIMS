import type { LoginRequestDto, LoginResponseDto } from '~/services/modules/Auth'
export type AuthUser = LoginResponseDto['user']

export interface IAuthService {
  /**
   * 呼叫 /auth/login，成功後會保存 token 與使用者快取。
   */
  login(payload: LoginRequestDto): Promise<LoginResponseDto>

  /**
   * 呼叫 /auth/logout（若後端提供），並清除本地 token 與使用者快取。
   */
  logout(): Promise<void>

  /**
   * 取得目前使用者。預設先回傳本地快取（若有），
   * force=true 時一定會打 /auth/me。
   */
  getCurrentUser(force?: boolean): Promise<AuthUser | null>

  /**
   * 是否已登入（本地是否有 token）。
   */
  isAuthenticated(): boolean

  /**
   * 取得目前 token（從本地）。
   */
  getToken(): string | null

  /**
   * 手動設定/清除 token（與攔截器用的 localStorage key 同步）。
   */
  setToken(token: string | null): void

  /**
   * 呼叫 /auth/refresh，更新 token（成功後覆蓋本地 token）。
   * 回傳新的 token。
   */
  refreshToken(): Promise<string>
}
