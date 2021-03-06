const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

//helper function
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: `7d`
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const token = jwtSignUser(user.toJSON());
      res.send({ user: user.toJSON(), token });
      res.send(console.log(user));
      return;
    } catch (err) {
      res.status(400).send({
        error: `This email account is aready in use`
      });
      console.log(err);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        return res.status(403).send({
          error: `The email was incorrect`
        });
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(403).send({
          error: `The password was incorrect`
        });
      }
      const token = jwtSignUser(user.toJSON());
      res.send({ user: user.toJSON(), token });
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to login. If this orrucs frequently, pls contact the admin, using the facebook icon on the top right`
      });
      console.log(err);
    }
  }
};
