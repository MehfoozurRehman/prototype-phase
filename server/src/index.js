const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// api config
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares

app.use(express.json());
app.use(cors());

// db config
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
