const express = require("express");
const router = express.Router();
// const db = require("../config/connection");

router.get("/", (req, res) => {
    console.log("Res is working");
    res.send("Hello world");

});

module.exports = router;