const section = document.getElementById('content')
const flags = document.getElementById('flags')
const contentArea = document.getElementById('content-area')
const quizSection = document.getElementById('quiz')
const row = document.getElementById('contentRow')
let flagButton = document.getElementById('flagButton')
let quizButton = document.getElementById('quizButton')
let submitButton = document.getElementById('quizzerSubmit')
const skipButton = document.getElementById('skipQuestionButton')

flagButton.addEventListener('click', function () {
  learning()
  flagButton.setAttribute('disabled', true)
})
quizButton.addEventListener('click', function () {
  quizzer()
  quizButton.setAttribute('disabled', true)
})
