const { User } = require("../models");

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
      return;
    } catch (err) {
      res.status(400).send({
        error: `This email account is aready in use=`
      });
      console.log(err);
    }
  }
};
