const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname + "public")));

//body parser middleware

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

//cors middleware

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

//
app.listen(port, () => {
  console.log("server started");
});
