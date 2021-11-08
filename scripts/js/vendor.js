const section = document.getElementById('content');
const flags = document.getElementById('flags');
const contentArea = document.getElementById('content-area');
const quizSection = document.getElementById('quiz');
const row = document.getElementById('contentRow');
let flagButton = document.getElementById('flagButton');
let quizButton = document.getElementById('quizButton');
let submitButton = document.getElementById('quizzerSubmit');
let skipButton = document.getElementById('skip');

flagButton.addEventListener('click', learning);
quizButton.addEventListener('click', quizzer);

if (typeof submitButton != 'undefined' || submitButton != null) {
  let imageName =
    document.getElementById('flagSprite') != null
      ? document.getElementById('flagSprite').alt
      : '';
  let answer =
    document.getElementById('quizzer') != null
      ? document.getElementById('quizzer').value
      : '';
}
