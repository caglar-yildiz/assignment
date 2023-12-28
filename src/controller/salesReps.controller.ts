import { fetchCountryData } from "../util/countryRequest";
import { minMaxSalesRCalculator } from "../util/minMaxSalesRCalculator";
import { controllerWrapper } from "./controllerWrapper";
import { Request, Response } from "express";

export class SalesRepsController {
  getSalesRepsRequirements = controllerWrapper(async (req: Request, res: Response) => {
    const countries = await fetchCountryData();

    const regionMap = countries.reduce(
      (acc: { [key: string]: string[] }, country) => {
        const { region, name } = country;
        if (acc[region]) {
          acc[region].push(name);
        } else {
          acc[region] = [name];
        }
        return acc;
      },
      {}
    );

    const response : ResponseType[] = []
    
    for( let regionName of Object.keys(regionMap)) {
        const countryList = regionMap[regionName];
        const result = minMaxSalesRCalculator(3, 7, countryList.length);
        const { minSalesReq, maxSalesReq } = result;
        response.push({
            region: regionName,
            minSalesReq,
            maxSalesReq
        })
    }

    return res.json(response);
  });
}

type ResponseType = {
  region: string;
  minSalesReq: number;
  maxSalesReq: number;
};
