const userCtrl = require("../controller/user.controller.js");
const express = require('express');
var router = express.Router();
router.put("/user/:id", function () {console.info ("samarch")});
router.get("/user/:id", function () {console.info ("samarch")});
router.delete("/user/:id", function () {console.info ("samarch")});
router.post("/user", function () {console.info ("samarch")});
router.get("/users", function () {console.info ("samarch")});

module.exports = router;