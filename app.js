const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose connect, schema, and model
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = {
  name: String,
};

const Todo = mongoose.model("Todo", todoSchema);

app.get("/", async (req, res) => {
  let day = date.getDate();
  try {
    let tasks = await Todo.find({});
    res.render("list", { weekday: day, newListItems: tasks });
  } catch (err) {
    console.error("Error fetching data from the database:", err);
    res.status(500).send("Error fetching data from the database");
  }
});

app.get("/:customList", (req, res) => {
  const customList = req.params.customList;

  res.render();
});

app.post("/delete", async (req, res) => {
  let delItem = await req.body.checkbox;

  await Todo.findByIdAndDelete({ _id: delItem });
  console.log("deleted item");
  res.redirect("/");
});

app.post("/", async (req, res) => {
  let item = req.body.newItem;

  try {
    let newTodo = new Todo({
      name: item,
    });

    await newTodo.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error saving data to the database:", err);
    res.status(500).send("Error saving data to the database");
  }
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
