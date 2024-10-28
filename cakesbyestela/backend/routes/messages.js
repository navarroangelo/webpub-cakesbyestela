const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { messages } = require("../data");

const dataFilePath = path.join(__dirname, "../data.js");

router.post("/", (req, res) => {
  const newMessage = req.body;

  fs.readFile(dataFilePath, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error Reading Data File");

    const fileContent = data.replace(
      /const messages = \[([\s\S]*?)\];/,
      `const messages = [${JSON.stringify(newMessage)},$1];`
    );

    fs.writeFile(dataFilePath, fileContent, (err) => {
      if (err) return res.status(500).send("Error Saving Message");
      res.status(201).send("Message Saved Successfully!");
    });
  });
});

router.get("/", (req, res) => {
  res.json(messages);
});

module.exports = router;
