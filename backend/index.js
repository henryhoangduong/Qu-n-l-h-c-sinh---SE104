const user = require('./controller/user')
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));


app.post("/signin", (req, res) => {
  const token = user.signin(req.body.email, req.body.password);
  res.send(token)
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
