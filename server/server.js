import database from "./database.js";
import express from "express"
import cors from "cors";
import { config } from 'dotenv';

config();

const app = express()

app.use(cors())

app.get("/customers", async function(req, res) {
    try {
        const customers = await database.getAllCustomers();
        res.send(customers).statusCode(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.get("/customers/:id", async function(req, res) {
    try {
        const customer = await database.getCustomer(req.params.id);
        if (customer) {
            res.send(customer).statusCode(200);
        } else {
            res.send("Customer not found").statusCode(404);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

app.delete("/customers/:id", function(req, res) {
    
})

app.use(express.json());

app.post("/customers", function(req, res) {

});

app.put("/customers/:id", function(req, res) {

})

app.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT);
});