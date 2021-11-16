function quizzer() {
  const flagId = getFlagCodes(flagJson)
  createQuizSection(flagId, flagJson[flagId])
}
function learning() {
  const flagId = getFlagCodes(flagJson)
  createLearnSection(flagId, flagJson[flagId])
}
function quizBot(value, answer, event) {
  if (value.toLowerCase() == '') {
    const alert = alertHelper(`You did not put a answer in`)
    contentArea.insertBefore(alert, row)
    event.target.setAttribute('disabled', true)
    setTimeout(function () {
      contentArea.removeChild(alert)
      event.target.removeAttribute('disabled')
    }, 1500)
  }
  if (
    value.toLowerCase() != '' &&
    value.toLowerCase() != answer.toLowerCase()
  ) {
    const alert = alertModal(
      `Thats Incorrect! The answer was <strong>${answer}</strong>`
    )
    contentArea.insertBefore(alert, row)
    setTimeout(function () {
      contentArea.removeChild(alert)
      quizzer()
      event.target.setAttribute('disabled', false)
    }, 2000)
  } else if (
    value.toLowerCase() != '' &&
    value.toLowerCase() == answer.toLowerCase()
  ) {
    const success = successHelper(`Thats <strong>Correct!</strong>`)
    contentArea.insertBefore(success, row)
    setTimeout(function () {
      contentArea.removeChild(success)
      quizzer()
      event.target.setAttribute('disabled', false)
    }, 2000)
  }
}
function skipQuestion(answer, event) {
  const alert = alertHelper(`The answer was <strong>${answer}</strong>`)
  contentArea.insertBefore(alert, row)
  event.target.setAttribute('disabled', true)
  setTimeout(function () {
    contentArea.removeChild(alert)
    quizzer()
    event.target.setAttribute('disabled', true)
  }, 2000)
}
