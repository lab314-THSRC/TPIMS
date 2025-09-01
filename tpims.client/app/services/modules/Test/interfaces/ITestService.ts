import type { WeatherForecastResponseDto } from "~/services/modules/Test";

export interface ITestService {
  sayHello: () => void
  weatherForecast: () => Promise<WeatherForecastResponseDto[]>
}
