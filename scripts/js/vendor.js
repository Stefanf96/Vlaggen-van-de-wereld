const section = document.getElementById('content');
const flags = document.getElementById('flags');
const quizSection = document.getElementById('quiz');
let flagButton = document.getElementById('flagButton');
let quizButton = document.getElementById('quizButton');
let submitButton = document.getElementById('quizzerSubmit');
flagButton.addEventListener('click', learning);
quizButton.addEventListener('click', quizzer);

if (submitButton) {
  quizButton.addEventListener('click', quizAction);
}
