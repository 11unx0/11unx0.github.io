// script.js

// cantactlock
document.addEventListener('DOMContentLoaded', function() {
    let startTime;
    let correctAnswer;

    function generateQuestion() {
        // generate a random math problem
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;

        // display the math question in the HTML
        const mathQuestion = document.getElementById('math-question');
        mathQuestion.textContent = `${num1} + ${num2} = ?`;

        // record the time when the user starts answering
        startTime = new Date().getTime();
    }

    // generate the first question on page load
    generateQuestion();

    // listen for the button click event
    document.getElementById('check-answer').addEventListener('click', function() {
        const userAnswer = parseInt(document.getElementById('user-answer').value, 10);
        const currentTime = new Date().getTime();
        const timeTaken = (currentTime - startTime) / 1000; // time in seconds

        // show the SVG if the user's answer is correct and they took more than x seconds
        if (timeTaken >= 4 && userAnswer === correctAnswer) {
            document.getElementById('reniatnoc-liame').classList.remove('hidden');
        } else {
            document.getElementById('reniatnoc-liame').classList.add('hidden');
            alert('Wrong answer or too fast, please try again.');
            generateQuestion();
        }

        // clear the answer input field
        document.getElementById('user-answer').value = '';
    });
});
