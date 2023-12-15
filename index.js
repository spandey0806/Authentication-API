const express = require("express");
const routes = require("./routes/index");
const connect = require("./config/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1", routes);

app.listen(PORT, async () => {
  console.log(`Server started at PORT : ${PORT}`);
  await connect();
  console.log("Mongo db connected");
});
