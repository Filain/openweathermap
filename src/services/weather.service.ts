import * as https from "https";
import * as path from "path";

import { configs } from "../configs/configs";
import { IQuery } from "../types/query.types";
import { IWeather } from "../types/weather.type";

class WeatherService {
  public async getByLocation(query: IQuery): Promise<IWeather> {
    const { city, lat, lon } = query;
    let urlBase: string;
    if (city) {
      urlBase = path.join(configs.API_URL, "data", "2.5", `weather?q=${city}&APPID=${configs.API_KEY}`);
    } else {
      urlBase = path.join(configs.API_URL, "data", "2.5", `weather?lat=${lat}&lon=${lon}&appid=${configs.API_KEY}`);
    }
    // https://api.openweathermap.org/data/2.5/weather?lat=49.8383&lon=24.0232&appid=8d93748b686624b5cda2f29e72dd6138
    // https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=8d93748b686624b5cda2f29e72dd6138
    return new Promise((resolve, reject) => {
      https.get(urlBase, (res) => {
        res
          .on("data", (data) => {
            resolve(JSON.parse(data));
          })
          .on("error", (error) => {
            reject(error);
          });
      });
    });
  }
}

export const weatherService = new WeatherService();
