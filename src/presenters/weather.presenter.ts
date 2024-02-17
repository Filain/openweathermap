import { IWeather } from "../types/weather.type";

export class WeatherPresenter {
  public static weatherToResponse(weather: IWeather) {
    return {
      weather: {
        id: weather.id,
        temp: weather.main.temp,
        feels_like: weather.main.feels_like,
        visibility: weather.visibility,
        wind: {
          speed: weather.wind.speed,
          deg: weather.wind.deg,
          gust: weather.wind.gust,
        },
      },
    };
  }
}
