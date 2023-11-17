const express = require("express");
const Controller = require("../controllers/crud.controllers");
const router = express.Router();

router.post("/", Controller.Post);
router.get("/getData", Controller.Get);
router.delete("/:id", Controller.Delete);
router.put("/:id", Controller.Put);

module.exports = router;
