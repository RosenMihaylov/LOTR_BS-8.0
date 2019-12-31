module.exports = {
  register(req, res) {
    res.send({
      message: `You succesfuly registered as: ${req.body.userName}`
    });
  }
};
