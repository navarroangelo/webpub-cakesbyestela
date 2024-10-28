require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");
const customerRoutes = require("./routes/customers");
const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
