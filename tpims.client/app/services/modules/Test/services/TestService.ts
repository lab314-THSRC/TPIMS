import { HttpClient, type IHttpClient } from '~/services'
import type { ITestService, WeatherForecastResponseDto } from '~/services/modules/Test'

export class TestService implements ITestService {
  private _client: IHttpClient = new HttpClient()

  sayHello() {
    console.log('Hello')
  }

  async weatherForecast() {
    return this._client
      .get<WeatherForecastResponseDto[]>('/WeatherForecast')
      .then((res) => res.data)
  }
}
