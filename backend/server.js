const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./dummy-data/data");
const connectDB = require("./config/db");

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Express Server running on the port:${PORT}`);
});
