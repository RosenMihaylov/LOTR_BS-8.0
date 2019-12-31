const AuthenticationControler = require("./controlers/AuthenticationControler");
const AuthenticationControlerPolicy = require("./policies/AuthenticationControlerPolicy");

module.exports = app => {
  app.post(
    "/register",
    AuthenticationControlerPolicy.register,
    AuthenticationControler.register
  );
};
