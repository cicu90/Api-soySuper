const express = require("express");
const router = express.Router();
const {getDataController} = require("../controller/controllers")

router.get("/", getDataController);

module.exports = router;