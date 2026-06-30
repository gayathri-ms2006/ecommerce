const express = require("express");
const productRoutes = require("./modules/product/product.routes");

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

module.exports = app;