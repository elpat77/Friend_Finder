// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require("express");
const router = express.Router();
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;

