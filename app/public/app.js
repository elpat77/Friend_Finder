$(document).ready(function () {


    $('#submitBtn').on('click', function (s) {
        s.preventDefault();

        let answerQ1 = $("#Q1").val();
        let answerQ2 = $("#Q2").val();
        let answerQ3 = $("#Q3").val();
        let answerQ4 = $("#Q4").val();
        let answerQ5 = $("#Q5").val();
        let answerQ6 = $("#Q6").val();
        let answerQ7 = $("#Q7").val();
        let answerQ8 = $("#Q8").val();
        let answerQ9 = $("#Q9").val();
        let answerQ10 = $("#Q10").val();
        // console.log(answerName, answerPicture);

        var answers = [];
        answers.push(parseInt(answerQ1), parseInt(answerQ2), parseInt(answerQ3), parseInt(answerQ4), parseInt(answerQ5), parseInt(answerQ6), parseInt(answerQ7), parseInt(answerQ8), parseInt(answerQ9), parseInt(answerQ10));
        // console.log(answers);

        var friend = {
            'name': $("#name").val(),
            'profilePic': $("#profilePic").val(),
            'answers': answers
        }
        console.log(friend)

        $.ajax({
            type: "POST",
            url: "/api/friends",
            data: friend
        }).then(res => {
            console.log(res)
        })

    })
});