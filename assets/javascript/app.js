var answerArray = ["d", "b", "c", "a", "c"];

var questionNameArray = ["nickname", "capital", "flower", "bird", "dish"];

var userAnswersArray = [];

var correct = 0;
var missed = 0;
var unanswered = 0;

var countdown = 60;
var intervalId;

intervalId = setInterval(decrement, 1000);

function decrement() {
    countdown--;
    $("#timer").text(countdown + " seconds");

    if (countdown === 0) {
        stop();
        end();
    };
};


function stop() {
    clearInterval(intervalId);
};


$("#submit").on("click", function () {

    end();

});


var end = function () {

    for (var i = 1; i < answerArray.length + 1; i++) {

        var userAnswer = $("#Q" + i + " input[name=" + questionNameArray[i - 1] + "]:checked").val();

        userAnswersArray.push(userAnswer);

    };

    for (var j = 0; j < answerArray.length; j++) {

        if (userAnswersArray[j] === undefined) {
            unanswered++;
        }
        else if (answerArray[j] === userAnswersArray[j]) {
            correct++;
        }
        else {
            missed++;
        };

    };

    $("#timerBox").attr("id", "bye");
    $("#questions").attr("id", "bye");

    $("#resultsOff").append("<div>Correct: " + correct + "</div>");
    $("#resultsOff").append("<div>Missed: " + missed + "</div>");
    $("#resultsOff").append("<div>Unanswered: " + unanswered + "</div>");
    $("#resultsOff").attr("id", "resultsOn");
};

