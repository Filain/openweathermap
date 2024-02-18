import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.errors";
import { InputValidator } from "../validators/input.validator";

class ValidationMiddleware {
  public async isValid(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(res.locals);

      const { error } = InputValidator.validateData.validate(res.locals);
      if (error) {
        throw new ApiError(error.details[0].message, 400);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}
export const validationMiddleware = new ValidationMiddleware();
