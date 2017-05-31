const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userSchema = require('./models/user.model.js');

mongoose.connect('mongodb://localhost:27017/meanproject');

var userModel = mongoose.model('User', userSchema);

const userRouter = require('./routes/user.router.js');
const crimeRouter = require('./routes/crime.router.js');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //res.header('Content-Type', 'application/json');
    next();
});
app.use("/", userRouter);
app.use("/", crimeRouter);

app.listen(3100, function () {
  console.log('Example app listening on port 3100!');
});