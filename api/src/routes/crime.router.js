const ctrl = require("../controller/crime.controller.js");
const mw = require("../middleware/auth.middleware");
const express = require('express');
const router = express.Router();

router.put("/crime/:id", mw.mustBeDetective, ctrl.update);
router.get("/crime/:id", mw.mustBeAgent, ctrl.read);
router.delete("/crime/:id", mw.mustBePoliceChief, ctrl.delete);
router.post("/crime", mw.mustBeDetective, ctrl.create);
router.post("/crimes/search", ctrl.search);
router.get("/crimes", mw.mustBeAgent, ctrl.readAll);

module.exports = router;