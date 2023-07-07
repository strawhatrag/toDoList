const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
