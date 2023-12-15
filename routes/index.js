const express = require("express");
const routes = express.Router();

routes.post("/register", (req, res) => {
  res.send(" Registered Success");
});

routes.post("/login", (req, res) => {
  res.send("Login success");
});

module.exports = routes;
