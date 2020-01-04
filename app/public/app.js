$(document).ready(function () {


    $('#submitBtn').on('click', function (s) {
        s.preventDefault();

        var valid = true;
        if ($("#name").val() === "" || $("#profilePic").val() === "") {
            valid = false;
        } else if ($("#Q1").val() === "empty" || $("#Q2").val() === "empty" || $("#Q3").val() === "empty" || $("#Q4").val() === "empty" || $("#Q5").val() === "empty" || $("#Q6").val() === "empty" || $("#Q7").val() === "empty" || $("#Q8").val() === "empty" || $("#Q9").val() === "empty" || $("#Q10").val() === "empty") {
            valid = false;
        }

        if (valid === true) {
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
            console.log("friend", friend)

            $.ajax({
                type: "POST",
                url: "/api/friends",
                data: friend
            }).then(res => {
                console.log("res", res.name)
                $("#matchName").text(res.name);
                $("#matchPicture").text(res.picture);
                $("#matchModal").modal('toggle');

            });
        } else {
            alert("Please fill out all of the survey fields");
        }

    })

});

