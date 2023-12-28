import express, { Router } from "express";

import { CountryController } from "../controller/country.controller";

export default function router(countryController: CountryController): Router {
  const router = express.Router();


  router.get("/", countryController.filterCountries);
  router.get("/:region", countryController.filterCountries);

  return router;
}
