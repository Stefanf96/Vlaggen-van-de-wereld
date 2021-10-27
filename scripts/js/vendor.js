const section = document.getElementById('content')
const flags = document.getElementById('flags')
const quizSection = document.getElementById('quiz')
let flagButton = document.getElementById('flagButton')
let quizButton = document.getElementById('flagButton')

if (flagButton) {
  flagButton.addEventListener('click', learning)
}
if (quizButton) {
  flagButton.addEventListener('click', quizzer)
}
