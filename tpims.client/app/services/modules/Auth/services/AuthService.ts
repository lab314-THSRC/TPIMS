import type {
  LoginRequestDto,
  LoginResponseDto,
  IAuthService,
  AuthUser,
} from '~/services/modules/Auth'
import { HttpClient, type IHttpClient } from '~/services'

const TOKEN_KEY = 'token'
const USER_KEY = 'auth.user'

export class AuthService implements IAuthService {
  private client: IHttpClient = new HttpClient()
  private meCache: AuthUser | null = null

  constructor() {
    const cachedUserStr = this._safeGetLocalStorage(USER_KEY)
    if (cachedUserStr) {
      try {
        this.meCache = JSON.parse(cachedUserStr) as AuthUser
      } catch {
        localStorage.removeItem(USER_KEY)
      }
    }
  }

  async login(payload: LoginRequestDto): Promise<LoginResponseDto> {
    const resp = await this.client.post<LoginResponseDto>('/auth/login', payload)
    const { token, user } = resp.data

    this._persistToken(token)
    this._persistUser(user)
    this.meCache = user

    return resp.data
  }

  async logout(): Promise<void> {
    try {
      // 後端若無此路徑可忽略錯誤
      await this.client.post('/auth/logout')
    } catch {
      // ignore
    } finally {
      this._clearPersistedAuth()
      this.meCache = null
    }
  }

  async getCurrentUser(force = false): Promise<AuthUser | null> {
    const token = this.getToken()
    if (!token) return null

    if (!force && this.meCache) return this.meCache

    try {
      const resp = await this.client.get<AuthUser>('/auth/me')
      const user = resp.data
      this.meCache = user
      this._persistUser(user)
      return user
    } catch {
      // 失敗（如 401）時清乾淨，避免前端狀態不同步
      await this.logout()
      return null
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken()
  }

  getToken(): string | null {
    return this._safeGetLocalStorage(TOKEN_KEY)
  }

  setToken(token: string | null): void {
    if (token) {
      this._persistToken(token)
    } else {
      localStorage.removeItem(TOKEN_KEY)
    }
  }

  async refreshToken(): Promise<string> {
    const resp = await this.client.post<{ token: string }>('/auth/refresh')
    const { token } = resp.data
    this._persistToken(token)
    return token
  }

  // ======= private helpers =======

  private _persistToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
  }

  private _persistUser(user: AuthUser) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  private _clearPersistedAuth() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  private _safeGetLocalStorage(key: string): string | null {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  }
}
