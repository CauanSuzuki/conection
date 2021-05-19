const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(3000, function () {
  console.log("Listening");
});
