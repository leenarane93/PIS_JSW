const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

// Set up Global configuration access
dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});
