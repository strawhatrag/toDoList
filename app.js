const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// using EJS with express
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var date = new Date();

  let currentday = date.getDay();
  let day = "";

  switch (currentday) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Invalid day";
      break;
  }
  //ejs render
  res.render("list", { weekday: day });
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
