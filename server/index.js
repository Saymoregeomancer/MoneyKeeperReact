const express = require("express");
const config = require("config");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

app.use("/auth", require("./router/auth.routers"));
app.use("/transactions", require("./router/transaction.routers"));
app.use("/category", require("./router/category.routers"));

const PORT = config.get("serverPort") || 5000;

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));

    app.listen(PORT, () => {
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};

start();
