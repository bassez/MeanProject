const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userSchema = require('./models/user.model.js');

mongoose.connect('mongodb://localhost:27017/meanproject');

var userModel = mongoose.model('User', userSchema);

const userRouter = require('./routes/user.router.js');
const crimeRouter = require('./routes/crime.router.js');

app.use("/", userRouter);
app.use("/", crimeRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});