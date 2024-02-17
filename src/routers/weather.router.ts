import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";
import { weatherMiddleware } from "../middleware/weather.middleware";

const router = Router();

router.get("/weather", weatherMiddleware.isQueryValid, weatherController.getByLocation);

export const weatherRouter = router;
