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
    createModal(`Alert`, `You didn't put a answer in`, 1500)
    event.target.setAttribute('disabled', true)
    setTimeout(function () {
      event.target.setAttribute('disabled', false)
    }, 1000)

    // contentArea.insertBefore(alert, row)
  }
  if (
    value.toLowerCase() != '' &&
    value.toLowerCase() != answer.toLowerCase()
  ) {
    createModal(
      `Alert`,
      `That's Incorrect! The answer was <strong>${answer}</strong>`
    )

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
  createModal(`Alert`, `The answer was <strong>${answer}</strong>`)
  event.target.setAttribute('disabled', true)
  setTimeout(function () {
    quizzer()
    event.target.setAttribute('disabled', true)
  }, 2000)
}
