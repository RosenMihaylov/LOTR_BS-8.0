const { Card } = require("../models");

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
  },
  async updateCard(req, res) {
    try {
      return await Card.update(
        {
          cardSet: req.body.cardSet,
          name: req.body.name,
          uniqueSubName: req.body.uniqueSubName,
          cardType: req.body.cardType,
          cardSubType: req.body.cardSubType,
          kind: req.body.kind,
          culture: req.body.culture,
          title: req.body.title,
          strength: req.body.strength,
          vitality: req.body.vitality,
          twilight: req.body.twilight,
          resistance: req.body.resistance,
          signet: req.body.signet,
          restriction: req.body.restriction,
          responseSkill: req.body.responseSkill,
          activeFellowshipPhaseSkill: req.body.activeFellowshipPhaseSkill,
          passiveFellowshipPhaseSkill: req.body.passiveFellowshipPhaseSkill,
          activeShadowPhaseSkill: req.body.activeShadowPhaseSkill,
          passiveShadowPhaseSkill: req.body.passiveShadowPhaseSkill,
          activeManeuverPhaseSkill: req.body.activeManeuverPhaseSkill,
          passiveManeuverPhaseSkill: req.body.passiveManeuverPhaseSkill,
          activeArcheryPhaseSkill: req.body.activeArcheryPhaseSkill,
          passiveArcheryPhaseSkill: req.body.passiveArcheryPhaseSkill,
          activeBattlePhaseSkill: req.body.activeBattlePhaseSkill,
          passiveBattlePhaseSkill: req.body.passiveBattlePhaseSkill,
          cardImageLink: req.body.cardImageLink
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
        .then(() => {
          res.send(`succesfuly card with id ${req.body.id}`);
        })
        .then(() => res.end());
    } catch (err) {
      res.status(400).send({
        error: `${err}`
      });
    }
  }
};
