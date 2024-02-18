import * as joi from "joi";

import { regexConstants } from "../constants/regex.constants";

export class InputValidator {
  static validateData = joi.object({
    city: joi.string().regex(regexConstants.CITY).trim(),
    lat: joi.string().regex(regexConstants.COORDINATE).trim(),
    lon: joi.string().regex(regexConstants.COORDINATE).trim(),
  });
}
