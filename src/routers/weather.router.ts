import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";
import { validationMiddleware } from "../middleware/validation.middleware";
import { weatherMiddleware } from "../middleware/weather.middleware";

const router = Router();

router.get("/weather", weatherMiddleware.isQueryValid, validationMiddleware.isValid, weatherController.getByLocation);

export const weatherRouter = router;
