import { FilterQuery } from "mongoose";
import { ICountry, ICountryDocument } from "../model/country.model";
import CountryModel from "../model/country.model";

export const countryService: ICountryService = {
  createCountry,
  filterCountriesByRegion,
};


// I did not create other methods so that it will be short and simple
async function createCountry(input: ICountry)  :Promise<ICountryDocument >  {
  return await CountryModel.create(input);
}

// I am not handling region and name query params here because CountryModel has a schema and it will handle it
async function filterCountriesByRegion(
  searchQuery: FilterQuery<ICountry> | undefined
): Promise<ICountryDocument[]> {
  console.log(searchQuery);
  if (searchQuery) {
    searchQuery.region = searchQuery.region === undefined ? "" : searchQuery.region;
    return await CountryModel.find({ region: searchQuery.region });
  } else {
    return await CountryModel.find();
  }
}

export interface ICountryService {
  createCountry(input: ICountry): Promise<ICountryDocument>;
  filterCountriesByRegion(
    searchQuery: FilterQuery<ICountry> | undefined
  ): Promise<ICountryDocument[]>;
}