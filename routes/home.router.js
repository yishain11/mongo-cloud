const express = require("express");
const router = express.Router();
const path = require("path");
const homePath = path.join(__dirname, "../views/home");

router.use(express.static(homePath));
router.get("/", (req, res) => {
  res.sendFile(homePath + "/home.html");
});

module.exports = router;
