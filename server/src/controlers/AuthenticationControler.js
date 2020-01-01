const { User } = require("../models");

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
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
      res.send({
        user
      });
    } catch (err) {
      res.status(500).send({
        error: `An error has occured trying to login. If this orrucs frequently, pls contact the admin, using the facebook icon on the top right`
      });
      console.log(err);
    }
  }
};
