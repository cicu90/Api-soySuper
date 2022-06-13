const express = require("express");
const router = express.Router();
const {getDataController, getMorePageController} = require("../controller/controllers")

const { verifyCache,setResponseCache  } = require("../cache/cache");

router.get("/",verifyCache, getDataController);

router.get("/:numberPage", verifyCache,getMorePageController);

module.exports = router;