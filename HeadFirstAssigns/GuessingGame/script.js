function checkGuess() {
    let guessIn = document.getElementById("guess");
    let guess = guessIn.value;

    let answers = ["red", "green", "blue"];

    let index = Math.floor(Math.random() * answers.length);

    let answer = guess == answers[index] ? 
        "Correct! I was thinking of " + answers[index] + "!" : 
        "You are wrong. I was thinking of " + answers[index] + ".";

    alert(answer);
}

function init() {
    let button = document.getElementById("submitButton");
    button.onclick = checkGuess;
}

window.onload = init;