const express = require("express");
const router = express.Router();
const db = require("../config/config");
const Card = require("../models/Card");

router.get("/", (req, res) =>
  Card.findAll()
    .then(cards => {
      console.log(cards);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
