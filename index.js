const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connections } = require("./config/db");
const { UserModel } = require("./model/quiz.model");
const data = require("./config/data.json");
const app = express();
const port = process.env.PORT || 8125;
app.use(express.json());
app.use(cors());

app.get("", (req, res) => {
  res.send("Hello World");
});
app.post("/add", (req, res) => {
  let data = req.body;
});

// UserModel.insertMany(data).then((data) => {
//   console.log(data);
// });

app.get("/quiz", async (req, res) => {
  try {
    const query = { ...req.query };
    console.log(query);
    let data = await UserModel.find(query);
    res.send({ data: data });
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, async () => {
  try {
    await connections;
    console.log(
      `Server is running on port db is connected http://localhost:${port}`
    );
  } catch (err) {
    console.log("db is not connected");
    console.log(err);
  }
});
