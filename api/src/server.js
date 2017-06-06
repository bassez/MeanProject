const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanProject');


const userRouter = require('./routes/user.router.js');
const crimeRouter = require('./routes/crime.router.js');

// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// });

var bodyParser   = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", userRouter);
app.use("/", crimeRouter);




app.listen(3002, function () {
  console.log('Example app listening on port 3000!');
});