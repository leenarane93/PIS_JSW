const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to API Service",
  });
});

app.post("/api/posts", (req, res) => {
  res.json({
    message: "Post Created...",
  });
});

app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "Pandu",
    password: "Panda",
  };

  jwt.sign({ user: user }, "secretKey", (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(3000, (req, res) => {
  console.log("Server started on 3000");
});
