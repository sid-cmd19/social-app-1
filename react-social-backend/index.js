const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const logStream = fs.createWriteStream(path.join(__dirname, "logs.log"), {
  flags: "a",
});

dotenv.config();
const url = process.env.MONGO_URL;

mongoose.connect(url);

const User = require("./models/userModel");

const app = express();

const uri = process.env.MONGO_URL;

//middlewares
app.use(express.json());
app.use(helmet());
app.use(
  morgan(
    ":method, URL : :url, status : :status, res-len : :res[content-length], res-time : :response-time ms, date : :date[web]",
    { stream: logStream }
  )
);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.get("/users", (req, res) => {
  res.send("Welcome to user page");
});

app.listen(8800, () => {
  console.log("Backend server is running");
});
