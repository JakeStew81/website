var numCorrect = 0;

function takeTest() {
    var response = "";
    var points = 0;
    var q1 = "Who created the apriltag?";
    var a1 = "APRIL ROBOTICS LAB";
    var q2 = "What type of visual marker is an apriltag?";
    var a2 = "FIDUCIAL";
    var q3 = "What is the purpose of an apriltag";
    var a3 = "POSE ESTIMATION";

    response = prompt(q1, "");
    let correct = response.toUpperCase() == a1 ? 1 : 0
    if (response) points = runningTotal(correct);
    if (correct == 0) alert("Incorrect. The correct answer was: " + a1);

    response = prompt(q2, "");
    correct = response.toUpperCase() == a2 ? 1 : 0
    if (response) points = runningTotal(correct);
    if (correct == 0) alert("Incorrect. The correct answer is: " + a2);

    response = prompt(q3, "");
    correct = response.toUpperCase() == a3 ? 1 : 0
    if (response) points = runningTotal(correct);
    if (correct == 0) alert("Incorrect. The correct answer is: " + a3);

    alert("You answered a total of " + points + " correctly.");
    numCorrect = 0;
    points = 0;
}
function runningTotal(i) {
    numCorrect += i;
    return numCorrect;
}