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
    const alert = createModal(
      `Alert`,
      `The answer was <strong>${answer}</strong>`
    )
    event.target.setAttribute('disabled', true)
    document.body.append(alert)
    setTimeout(function () {
      document.body.removeChild(alert)
      quizzer()
      event.target.setAttribute('disabled', true)
    }, 2000)

    // contentArea.insertBefore(alert, row)
  }
  if (
    value.toLowerCase() != '' &&
    value.toLowerCase() != answer.toLowerCase()
  ) {
    const alert = createModal(
      `Alert`,
      `Thats Incorrect! The answer was <strong>${answer}</strong>`
    )
    document.body.append(alert)
    setTimeout(function () {
      document.body.removeChild(alert)
      quizzer()
      event.target.setAttribute('disabled', true)
    }, 2000)
  } else if (
    value.toLowerCase() != '' &&
    value.toLowerCase() == answer.toLowerCase()
  ) {
    const success = createModal(`Success`, `Thats <strong>Correct!</strong>`)
    document.body.append(success)
    setTimeout(function () {
      document.body.removeChild(success)
      quizzer()
      event.target.setAttribute('disabled', true)
    }, 2000)
  }
}
function skipQuestion(answer, event) {
  const alert = createModal(
    `Alert`,
    `The answer was <strong>${answer}</strong>`
  )
  event.target.setAttribute('disabled', true)
  document.body.append(alert)
  setTimeout(function () {
    document.body.removeChild(alert)
    quizzer()
    event.target.setAttribute('disabled', true)
  }, 2000)
}
