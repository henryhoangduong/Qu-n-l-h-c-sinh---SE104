const user = require('./controller/user')
const bodyParser = require("body-parser");
const express = require("express");
const { expressjwt: expressjwt } = require("express-jwt");
const jwt = require('jsonwebtoken')
const app = express();
const port = 3000;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(process.env.JWT_KEY)

app.post("/signin", (req, res) => {
  const payload = {
    email:req.body.email,
    password: req.body.password,
    role:'student'
  }
  const token = jwt.sign(payload,process.env.JWT_KEY)
  res.send(token)
});

app.get(
  "/test",
  expressjwt({ secret:process.env.JWT_KEY , algorithms: ["HS256"] }),
  (req, res) => {
    console.log(req.auth.role);
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
