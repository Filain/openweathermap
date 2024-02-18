import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters/weather.presenter";
import { weatherService } from "../services/weather.service";
import { IQuery } from "../types/query.types";

class WeatherController {
  public async getByLocation(req: Request, res: Response, next: NextFunction) {
    try {
      const weather = await weatherService.getByLocation(req.query as IQuery);
      return res.json({ data: WeatherPresenter.weatherToResponse(weather) });
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
