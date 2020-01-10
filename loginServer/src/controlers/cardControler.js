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
  },
  async deleteCard(req, res) {
    try {
      return await Card.destroy({ where: { id: req.body.id } })
        .then(() => {
          res.send(`succesfuly deleted card with id ${req.body.id}`);
        })
        .then(() => res.end());
    } catch (err) {
      res.status(400).send({
        error: `${err}`
      });
    }
  }
};
