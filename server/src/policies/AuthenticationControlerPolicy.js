const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,30}$")),
      access_token: [Joi.string(), Joi.number()],
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] }
      })
    }).xor("password", "access_token");
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break;
        case "password":
          res.status(400).send({
            error:
              "You must provide a password witch is 8-32 simbols long and includes only: lower or upper case letters, or numbers."
          });
          break;
        default:
          res.status(400).send({
            error: `Invalid register information`
          });
          
      }
    } else {
      next();
    }
  }
};
