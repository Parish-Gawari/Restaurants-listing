const express = require("express");
const Controller = require("../controllers/crud.controllers");
const router = express.Router();

router.post("/postData", Controller.Post);
router.get("/getData", Controller.Get);
router.delete("/delete/:id", Controller.Delete);
router.put("/update/:id", Controller.Put);

module.exports = router;
