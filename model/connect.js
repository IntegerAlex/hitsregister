
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv/config';

// dotenv.config(); // Load the environment variables from the .env file

// Set the variables for the MongoDB connection
// console.log(admin  + " " + password);
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch (e) {
    console.error("Error: " + e);
  
  }
}


export async function addHit(json){
  return new Promise(async (resolve, reject) => {
    try {
        await client.connect();
        const db = client.db('userInfoDatabase');
        const collection = db.collection('userInfo');
        const result = await collection.insertOne(json);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        resolve();
    }
    catch (e) {
        console.error("Error: " + e);
        reject();
    } finally {
        await client.close();
    }
})
}
