module.exports = app => {
  app.post("/register", (req, res) => {
    res.send({
      message: `You succesfuly registered as: ${req.body.userName}`
    });
  });
};
