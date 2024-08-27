import { MongoClient, ObjectId } from "mongodb";
import { config } from "dotenv";

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
  } finally {
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
  } finally {
    await client.close();
  }
}

async function getCustomer(id) {
  try {
    const connection = await client.connect();
    const db = await connection.db("Training");
    const collection = await db.collection("Customers");

    const customer = await collection.findOne({ _id: new ObjectId(id) });
    return customer;
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

async function getCustomerByEmail(email) {
  try {
    const connection = await client.connect();
    const db = await connection.db("Training");
    const collection = await db.collection("Customers");

    const customer = await collection.findOne({ email: email });
    return customer;
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

async function deleteCustomer(id) {
  try {
    const connection = await client.connect();
    const db = await connection.db("Training");
    const collection = await db.collection("Customers");

    await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (err) {
    console.log(err.stack);
  } finally {
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
  } finally {
    await client.close();
  }
}

async function updateCustomer(id, customer) {
  try {
    const connection = await client.connect();
    const db = await connection.db("Training");
    const collection = await db.collection("Customers");

    const dbcustomer = await collection
      .find({
        _id: new ObjectId(id),
      })
      .toArray();

    if (dbcustomer.length > 0) {
      return await collection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            name: customer.name,
            email: customer.email,
            password: customer.password,
          },
        }
      );
    } else {
      return await collection.insertOne({ ...customer, _id: new ObjectId(id) });
    }
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

export default {
  testConnection,
  getAllCustomers,
  getCustomer,
  getCustomerByEmail,
  deleteCustomer,
  addCustomer,
  updateCustomer,
};
