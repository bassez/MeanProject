const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanproject');

app.get('/', function(req, res) {
  res.send("Hello Etna's");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});