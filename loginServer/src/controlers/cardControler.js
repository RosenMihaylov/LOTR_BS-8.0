const Card = require("../models").card;

module.exports = {
  async addCard(req, res) {
    try {
      const card = await Card.create(req.body);
      res.send({ card: card.toJSON() });
    } catch (err) {
      res.status(400).send({
        error: `${err}`
      });
    }
  }
};
