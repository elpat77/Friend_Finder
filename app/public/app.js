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
        answers.push(answerQ1, answerQ2, answerQ3, answerQ4, answerQ5, answerQ6, answerQ7, answerQ8, answerQ9, answerQ10)
        // console.log(answers);

        const friendData = {
            'name': $("#name").val(),
            'picture': $("#picture").val(),
            'answers': answers
        }
        console.log(friendData);

        // $.ajax({
        //     type: 'POST',
        //     url: '/api/friendData',
        //     data: friendData
        // }).then(res => {
        //     console.log(res);
        // });
    });
});