import { NextFunction, Request, Response } from "express";

import { weatherService } from "../services/weather.service";
import { IQuery } from "../types/query.types";

class WeatherController {
  public async getByLocation(req: Request, res: Response, next: NextFunction) {
    try {
      const weather = await weatherService.getByLocation(req.query as IQuery);
      // console.log(weather);
      return res.json({ data: weather });
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
