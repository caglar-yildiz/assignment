import mongoose from 'mongoose';
import { ICountry } from './model/country.model';
import countryModel from './model/country.model';
import dotenv from 'dotenv';

dotenv.config();

const dbUri : string = process.env.MONGO_URL + "";
mongoose.connect(dbUri);


// Delete existing documents in the collection
async function deleteExistingDocuments() {
  await countryModel.deleteMany({});
  console.log('Existing documents deleted.');
}

// Create example countries
async function createExampleCountries() {
  const countries: ICountry[] = [];
  for (let i = 0; i < 100; i++) {
    let regionNumber = 0;
    if (i > 20 && i < 46) {
      regionNumber = 1;
    } else if (i >= 46 ) { 
      regionNumber = 2;
    }
    countries.push({
      name: `Country ${i}`,
      region: `Region ${regionNumber}`,
    });
  }

  for (const country of countries) {
    await countryModel.create(country);
  }

  console.log('Example countries created.');
}

// Seed data function
async function seedData() {
  try {
    await deleteExistingDocuments();
    await createExampleCountries();
    console.log('Data seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

seedData();