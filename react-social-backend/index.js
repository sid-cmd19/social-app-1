const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const logStream = fs.createWriteStream(path.join(__dirname, "logs.log"), {
  flags: "a",
});

dotenv.config();
const url = process.env.MONGO_URL;

// mongoose.connect(url);
mongoose.connect(url);

const User = require("./models/userModel");

// async function insert() {
//   await User.insertMany({
//     name: "Johny",
//   });
// }

// insert();
const app = express();

// const uri = process.env.MONGO_URL;

//middlewares
app.use(express.json()); //Body parser. When you make a post request, it will parse the body.
app.use(helmet()); //Helmet helps secure Express apps by setting HTTP response headers.

app.use(
  morgan(
    ":method, URL : :url, status : :status, res-len : :res[content-length], res-time : :response-time ms, date : :date[web]",
    { stream: logStream }
  )
);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.get("/users", (req, res) => {
  res.send("Welcome to user page");
});

app.listen(8800, () => {
  console.log("Backend server is running");
});
