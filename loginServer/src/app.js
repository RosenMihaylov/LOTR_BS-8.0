const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize, Card } = require("./models");
const config = require("./config/config");
const db = require("./config/databse");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

//card Routes
app.use("/cards", require("./routes/Cards"));
require("./routes")(app);

//createCard


sequelize
  .sync()
  .then(() => {
    const port = config.port || 8081;
    app.listen(port);
    console.log(`Server started on Port ${port}`);
  })
  .catch(err => console.log(err));

db.authenticate().then(() => console.log("database connected..."));
