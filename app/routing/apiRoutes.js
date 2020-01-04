const express = require("express");
const router = express.Router();

const friends = require('../data/friends');

// Return all friends found in friends.js
router.get("/", function (req, res) {
    res.send(friends);
});
// console.log(friends);

router.post("/", function (req, res) {
    // set a variable to receive the user data
    var user = req.body;

    // set a variable to keep the scores
    for (let i = 0; i < user.answers.length; i++) {
        user.answers[i] = parseInt(user.answers[i]);
    }

    //default friend match is the default user, results will be updated as more users join and default to whoever has the minimum difference in scores

    var friendIndex = 0;
    var minimumDifference = 40;

    for (let i = 0; i < friends.length; i++) {
        var scoreDifference = 0;
        for (let j = 0; j < friends[i].answers.length; j++) {
            var difference = Math.abs(user.answers[j] - friends[i].answers[j]);
            scoreDifference += difference;
            // console.log("default answers", friends[i].answers[j]);
            // console.log("user answer", user.answers[i])
            // console.log("difference", difference);
            // console.log("total difference", scoreDifference);

        }
        // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
        if (scoreDifference < minimumDifference) {
            friendIndex = i;
            minimumDifference = scoreDifference;
            // console.log("friend index", friendIndex);
            // console.log("minimun dif", minimumDifference);
        }
    }

    // after finding match, add user to friend array

    friends.push(user);

    // send back to browser the best friend match

    res.send(friends[friendIndex]);
    console.log("your friend match is ", friends[friendIndex]);
})

module.exports = router;