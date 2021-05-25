"use strict";

const express = require("express");
const router = express.Router();
const controler = require("../controler/atividades");

//router.get('/', controler.get);
router.post("/", controler.get);
router.post("/:page", controler.get);

module.exports = router;
