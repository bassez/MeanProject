const crimeCtrl = require("../controller/crime.controller.js");
const auth = require("../middleware/auth.middleware");
const express = require('express');
var router = express.Router();
router.put("/crime/:id", auth.mustBeConnected, auth.mustBeAdmin,  function (req, res) {console.info ("samarch"); res.send("dd")});
router.get("/crime/:id", function () {console.info ("samarch")});
router.delete("/crime/:id", function () {console.info ("samarch")});
router.post("/crime", function () {console.info ("samarch")});
router.get("/crimes", function () {console.info ("samarch")});

module.exports = router;