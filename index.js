const express = require("express");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Yuri! I'm learing DOCKER!!!");
});

app.listen(PORT, HOST);