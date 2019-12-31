const AuthenticationControler = require("./controlers/AuthenticationControler");

module.exports = app => {
  app.post("/register", AuthenticationControler.register);
};
