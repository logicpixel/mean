var express = require("express");
var app = express();

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});
app.use("/testicle", function(req, res, next){
  res.setHeader("Content-Type", "text/html");
  res.end("TESTICLE");
});
app.use("/", function(req, res, next){
  res.setHeader("Content-Type", "text/html");
  res.end("HOME");
});
app.listen(3000);
console.log("Listening on: http://localhost:3000")

module.exports = app;
