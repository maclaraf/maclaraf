const express = require("express");
const router = express.Router();
const operationsController = require("../controller/operationsController");

router.post("/operations/index", operationsController.index);
router.get("/operations", operationsController.readAll);

module.exports = router;
