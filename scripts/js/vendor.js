const section = document.getElementById('content')
const flags = document.getElementById('flags')
const contentArea = document.getElementById('content-area')
const quizSection = document.getElementById('quiz')
const row = document.getElementById('contentRow')
let flagButton = document.getElementById('flagButton')
let quizButton = document.getElementById('quizButton')
let submitButton = document.getElementById('quizzerSubmit')
const skipButton = document.getElementById('skipQuestionButton')
const modalButton = document.getElementById('modalPopup')
const modal_container = document.getElementById('success')
let modal_close = document.getElementById('close')

flagButton.addEventListener('click', function () {
  learning()
  flagButton.setAttribute('disabled', true)
})
quizButton.addEventListener('click', function () {
  quizzer()
  quizButton.setAttribute('disabled', true)
})

modalButton.addEventListener('click', function () {
  // modal_container.classList.add('show')

  const modal = createModal('Success', 'Thats Correct')
  document.body.append(modal)
})
if (modal_close != null) {
  modal_close.addEventListener('click', function () {
    // modal_container.classList.add('show')
    console.log(modal_container)
    document.body.removeChild(modal_container)
  })
}
