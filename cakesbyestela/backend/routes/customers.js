const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const dataFilePath = path.join(__dirname, "../data.js");
let { customers, products, messages } = require("../data");

router.get("/", (req, res) => {
  res.json(customers);
});

router.get("/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) return res.status(404).json({ message: "Customer not found" });
  res.json(customer);
});

router.post("/", (req, res) => {
  const { name, email, phone, address } = req.body;

  const newCustomer = {
    id: customers.length ? customers[customers.length - 1].id + 1 : 1,
    name,
    email,
    phone,
    address,
  };

  customers.push(newCustomer);

  const updatedData = `
    const products = ${JSON.stringify(products, null, 2)};
    const customers = ${JSON.stringify(customers, null, 2)};
    const messages = ${JSON.stringify(messages, null, 2)};
    module.exports = { products, customers, messages };
  `;

  fs.writeFile(dataFilePath, updatedData, "utf-8", (err) => {
    if (err) return res.status(500).send("Error saving customer data");
    res.send("Customer data saved successfully!");
  });
});

module.exports = router;
