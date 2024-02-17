import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.errors";

class WeatherMiddleware {
  public async isQueryValid(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      if (query.city && query.lon && query.lat) {
        throw new ApiError("Not Acceptable", 406);
      }
      if (Object.keys(req.query).length === 0) {
        throw new ApiError("Bad Requestе", 400);
      }
      if (query.city && (query.lon || query.lat)) {
        throw new ApiError("Bad Requestе", 400);
      }
      if ((query.lon && !query.lat) || (!query.lon && query.lat)) {
        throw new ApiError("Bad Requestе", 400);
      }
      res.locals = query;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const weatherMiddleware = new WeatherMiddleware();
