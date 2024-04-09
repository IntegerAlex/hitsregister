// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
// require('dotenv').config();

// Connection URI
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@hits.4o3jqnb.mongodb.net/?retryWrites=true&w=majority&appName=hits`;

// Database Name
const dbName = 'userInfoDatabase';

// Create a MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to the MongoDB server');

        // Get the database
        const db = client.db(dbName);

        // Create a collection named 'userInfo'
        const userInfoCollection = db.collection('userInfo');

        // Define the schema for userInfo documents
        const userInfoSchema = {
            ipInfo: {
              ip: String,
              network: String,
              version: String,
              city: String,
              region: String,
              region_code: String,
              country: String,
              country_name: String,
              country_code: String,
              country_code_iso3: String,
              country_capital: String,
              country_tld: String,
              continent_code: String,
              in_eu: Boolean,
              postal: String,
              latitude: Number,
              longitude: Number,
              timezone: String,
              utc_offset: String,
              country_calling_code: String,
              currency: String,
              currency_name: String,
              languages: String,
              country_area: Number,
              country_population: Number,
              asn: String,
              org: String
            },
            geolocationInfo: {
              ip: String,
              country_code: String,
              country_name: String,
              region_code: String,
              region_name: String,
              city: String,
              zip_code: String,
              time_zone: String,
              latitude: Number,
              longitude: Number,
              metro_code: Number
            },
            systemInfo: {
              userAgent: String,
              platform: String,
              languages: [String],
              cookieEnabled: Boolean,
              doNotTrack: String,
              screenWidth: Number,
              screenHeight: Number,
              colorDepth: Number,
              timeZone: String,
              browserPlugins: [{
                name: String,
                description: String,
                filename: String
              }],
              javaEnabled: Boolean,
              battery: {
                charging: Object,
                level: Object
              },
              hardwareConcurrency: Number,
              deviceMemory: Number
            }
          };
          


        console.log('userInfo collection and schema created successfully');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the main function to establish connection and create collection with schema
main();
