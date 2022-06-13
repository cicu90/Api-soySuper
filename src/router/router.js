const express = require("express");
const router = express.Router();
const {getDataController, getMorePageController} = require("../controller/controllers")

router.get("/", getDataController);

router.get("/:numberPage", getMorePageController);



module.exports = router;