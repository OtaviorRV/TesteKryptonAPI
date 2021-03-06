"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Carrega todas as rotas
const routes = require("./routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

module.exports = app;
