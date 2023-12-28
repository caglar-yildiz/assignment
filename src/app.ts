import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./controller/errorHandler";
import {countryService} from "./service/country.service";
import { CountryController } from "./controller/country.controller";
import CountryRouter from "./router/country.router";
import getSalesRouter from "./router/salesreps.router";

export const getApp = () => {
  const countryControllerInstance = new CountryController(countryService);
  const app = express();

  app.use(express.json());
  app.use(cors());

  dotenv.config();

  const port = process.env.PORT || 3000;

  // creating routes
  const routerCountry = CountryRouter(countryControllerInstance);
  const salesRouter = getSalesRouter();
  app.use("/countries", routerCountry);
  app.use("/salesreps", salesRouter);

  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  app.use(errorHandler);
  return app;
};
