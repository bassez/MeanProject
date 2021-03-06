const ctrl = require("../controller/user.controller.js");
const mw = require("../middleware/auth.middleware");
const express = require('express');
const router = express.Router();

router.put("/user/:id", mw.mustBePoliceChief, ctrl.update);
router.get("/user/:id", mw.mustBePoliceChief, ctrl.read);
router.delete("/user/:id", mw.mustBePoliceChief, ctrl.delete);
router.post("/user", ctrl.create);
router.get("/users", mw.mustBePoliceChief, ctrl.readAll);
router.get("/users/pending", mw.mustBePoliceChief, ctrl.readPending);
router.get("/user/:id/validate", mw.mustBePoliceChief, ctrl.validate);
router.get("/login", mw.mustBeConnected);
module.exports = router;