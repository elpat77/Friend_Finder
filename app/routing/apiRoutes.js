const express = require("express");
const router = express.Router();

const friendData = require('../data/friends');

class Friends {
    constructor(name, photo, scores) {
        this.name = name;
        this.photo = photo;
        this.scores = scores;
    }
}

router.get("/", (req, res) => {
    res.send(friendData);
    console.log("Res is working");
    res.send("Hello world");

});

module.exports = router;