const express = require("express");
const router = express.Router();
const path = require("path");
const docsPath = path.join(__dirname, "../views/students");

router.use(express.static(docsPath));

router.get("/", (req, res) => {
  res.sendFile(docsPath + "/students.html");
});
module.exports = router;
