const ctrl = require("../controller/user.controller.js");
const mw = require("../middleware/auth.middleware");
const express = require('express');
const router = express.Router();

router.put("/user/:id", mw.mustBePoliceChief, ctrl.update);
router.get("/user/:id", mw.mustBePoliceChief, ctrl.read);
router.delete("/user/:id", mw.mustBePoliceChief, ctrl.delete);
router.post("/user", ctrl.create);
router.get("/users", mw.mustBePoliceChief, ctrl.readAll);
router.get("/login", mw.mustBeConnected);
module.exports = router;