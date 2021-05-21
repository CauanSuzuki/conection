const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
require("dotenv").config();


const routes = require("./routes/routes");

const app = express();
app.use(cors())

app.use(express.json())

// app.use(bodyParser.json());

app.use(routes);

app.listen(3335, function () {
  console.log("Listening");
});