import { MongoClient, ObjectId } from 'mongodb';
import { config } from 'dotenv';

config();
console.log(process.env.DB_URI);
                                                                                                                                       
const url = process.env.DB_URI;

const client = new MongoClient(url);

async function testConnection() {
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

async function getAllCustomers() {
    try {
        const connection = await client.connect();
        const db = await connection.db("Training");
        const collection = await db.collection("Customers");

        const customers = await collection.find().toArray();
        return customers;
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

async function getCustomer(id) {
    try {
        const connection = await client.connect();
        const db = await connection.db("Training");
        const collection = await db.collection("Customers");

        const customers = await collection.findOne({"_id": new ObjectId(id)});
        return customers;
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

async function deleteCustomer(id) {
    try {
        const connection = await client.connect();
        const db = await connection.db("Training");
        const collection = await db.collection("Customers");

        await collection.deleteOne({"_id": new ObjectId(id)});
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

async function addCustomer(customer) {
    try {
        const connection = await client.connect();
        const db = await connection.db("Training");
        const collection = await db.collection("Customers");

        await collection.insertOne(customer);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

export default { testConnection, getAllCustomers, getCustomer, 
    deleteCustomer, addCustomer };