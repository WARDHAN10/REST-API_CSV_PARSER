const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  write,
  getFileName,
  getFile,
  update,
  remove,
  auth,
} = require("../controller/Crud");

router.param("fileId", getFileName);

router.post("/create", auth, write);
router.get("/read/:fileId", auth, getFile);
router.put("/update/:fileId", auth, update);
router.delete("/delete/:fileId", auth, remove);

module.exports = router;
