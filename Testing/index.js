const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to API Service",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  console.log(req.token);
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post Created....",
        authData,
      });
    }
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

function verifyToken(req, res, next) {
  const bearerheader = req.headers["authorization"];
  if (typeof bearerheader !== "undefined") {
    const bearertoken = bearerheader.split(" ")[1];
    req.token = bearertoken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, (req, res) => {
  console.log("Server started on 3000");
});
