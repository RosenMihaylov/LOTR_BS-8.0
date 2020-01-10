const AuthenticationControler = require("./controlers/AuthenticationControler");
const cardControler = require("./controlers/cardControler");
const AuthenticationControlerPolicy = require("./policies/AuthenticationControlerPolicy");
const express = require("express");

module.exports = app => {
  app.get("/", (req, res) => res.send("INDEX"));
  app.post(
    "/register",
    AuthenticationControlerPolicy.register,
    AuthenticationControler.register
  );
  app.post("/login", AuthenticationControler.login);
  app.post("/addCard", cardControler.addCard);
};
