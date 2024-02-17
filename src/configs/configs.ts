import { config } from "dotenv";

config();

export const configs = {
  PORT: process.env.PORT,
  API_URL: process.env.API_URL,
  API_KEY: process.env.API_KEY,
};
