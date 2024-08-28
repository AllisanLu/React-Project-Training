import database from "./database.js";
import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

app.use(cors());

app.get("/customers", async function (req, res) {
  try {
    const customers = await database.getAllCustomers();
    res.status(200);
    res.send(customers);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get("/customers/:id", async function (req, res) {
  try {
    const customer = await database.getCustomer(req.params.id);
    if (customer) {
      res.status(200);
      res.send(customer);
    } else {
      res.status(404);
      res.send("Customer not found");
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.delete("/customers/:id", async function (req, res) {
  try {
    await database.deleteCustomer(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.use(express.json());

app.post("/customers", async function (req, res) {
  const customer = req.body;

  if (customer.email) {
    const check = await database.getCustomerByEmail(customer.email);
    if (check) {
      return res.sendStatus(409);
    }
  } else {
    return res.sendStatus(400);
  }

  try {
    await database.addCustomer(customer);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.put("/customers/:id", async function (req, res) {
  const customer = req.body;

  try {
    await database.updateCustomer(req.params.id, customer);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
