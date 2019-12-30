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
});

router.post("/", (req, res) => {
    let matchScores = req.body.answers
    let match = new Friend(req.body.name, req.body.profilePic, matchScores)
    // console.log("MS", matchScores);

    let score = 0;

    for (let i = 0; i < matchScores.length; i++) {
        score += parseInt(matchScores[i]);
    }
    // console.log(score)

    for (let i = 0; i < friends.length; i++) {
        console.log(friends.length)
        // let matchScore = 0;
        // for (let j = 0; j < friends.length; j++) {
        //     console.log(friends.length)
        // matchScore += friends[i].scores[j]

        // console.log(score);
        // console.log(matchScore)
    }

    // res.send("success");

    friends.push(match);
    // console.log(friends)
})

module.exports = router;