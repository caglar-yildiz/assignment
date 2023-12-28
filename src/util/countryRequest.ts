import { CountryParams } from "../controller/country.controller";
import { ICountry } from "../model/country.model";
import { sendRequest } from "./requestHandler";

/**
 * 
 * @param params 
 * @returns Promise<ICountry[]>
 * <p> Fetches all countries from the API </p>
 * <p> I have created url above since there can be more than one request
 * Every method would implement its own logic accordingly </p>
 */
export async function fetchCountryData(params?: CountryParams)
: Promise<ICountry[]> {
  const method = "GET";
  const port = process.env.PORT || 3000;
  const url = `${process.env.APP_URL}:${port.toString()}/countries`; 
  try {
    const countries: ICountry[] = await sendRequest<ICountry[], {}>(
      url,
      method,
      params 
    );
    return countries;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
