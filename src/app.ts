import express, { NextFunction, Request, Response } from "express";

import { configs } from "./configs/configs";
import { ApiError } from "./errors/api.errors";
import { weatherRouter } from "./routers/weather.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = configs.PORT;

app.use("/", weatherRouter);

app.use("*", (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err?.status || 500).json({
    message: err?.message,
    status: err?.status,
  });
});

app.listen(PORT, async () => {
  // виклик методу listen для об'єкта app, що є сервером у вашій програмі.
  // Він вказує серверу слухати певний порт (PORT), а коли сервер починає слухати, викликається функція зворотного виклику, де виводиться повідомлення.
  console.log(`Server has started on PORT ${PORT}`);
});
