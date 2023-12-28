import { Request, Response } from "express";
import { ICountry } from "../model/country.model";
import { controllerWrapper } from "./controllerWrapper";
import { ICountryService } from "../service/country.service";

export class CountryController {
  private countryService: ICountryService;

  constructor(countryService: ICountryService) {
    this.countryService = countryService;
  }

  createCountry = controllerWrapper(
    async (req: Request<{}, {}, ICountry>, res: Response) => {
      const country = await this.countryService.createCountry(req.body);
      return res.json(country);
    }
  );

  filterCountries = controllerWrapper(
    async (
      req: Request<{}, {}, {}, CountryParams, Record<string, any>>,
      res: Response
    ) => {
      const { region, name } = req.query;
      let countries = [];

      if (region === undefined && name === undefined) {
        countries = await this.countryService.filterCountriesByRegion(
          undefined
        );
      } else {
        countries = await this.countryService.filterCountriesByRegion({
          region,
          name,
        });
      }
      const filteredCountries = countries.map(({ _id, __v, name, region }) => ({
        name,
        region,
      }));
      return res.json(filteredCountries);
    }
  );
}

export type CountryParams = {
  [K in keyof ICountry]?: string;
};
