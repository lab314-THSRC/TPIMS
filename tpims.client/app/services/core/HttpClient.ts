import type { IHttpClient } from '~/services'
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

export class HttpClient implements IHttpClient {
  private _instance: AxiosInstance

  constructor(baseURL: string = 'api/v1') {
    this._instance = axios.create({
      baseURL,
      timeout: 10000,
    })

    this._instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.set('Authorization', `Bearer ${token}`)
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    // Response Interceptor: 統一錯誤處理
    this._instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        console.error('[HTTP ERROR]', error)
        // 可以根據 status code 做錯誤導向或提示
        return Promise.reject(error)
      },
    )
  }

  async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return await this._instance.get<T>(url, config)
  }

  async post<T>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return await this._instance.post<T>(url, data, config)
  }

  async put<T>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return await this._instance.put<T>(url, data, config)
  }

  async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return await this._instance.delete<T>(url, config)
  }
}
