const express = require("express");
const router = express.Router();

const friends = require('../data/friends');

class Friend {
    constructor(name, profilePic, answers) {
        this.name = name;
        this.profilePic = profilePic;
        this.answers = answers;
    }
}

router.get("/", (req, res) => {
    res.send(friends);
    console.log("Res is working");
    res.send("Hello world");

});

router.post("/", (req, res) => {
    let match = new Friend(req.body.name, req.body.profilePic, req.body.answers)
    console.log(match);
    res.send("success");
    friends.push(match);
})


module.exports = router;