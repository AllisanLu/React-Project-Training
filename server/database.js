import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();
console.log(process.env.DB_URI);
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.DB_URI;

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

export default { run };