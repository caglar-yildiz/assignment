import mongoose from "mongoose";


// I have separated the interface and the model because I want to use the interface in other files when I need it
export interface ICountry  {
  name: string;
  region: string;
}

export interface ICountryDocument extends ICountry, mongoose.Document {
    _id : mongoose.Types.ObjectId;
    name: string;
    region: string;
}

const CountrySchema = new mongoose.Schema<ICountryDocument>(
  {
    name: { type: String, required: true },
    region: { type: String, required: true },
  },
  { timestamps: false }
);

export default mongoose.model<ICountryDocument>("countries", CountrySchema);
