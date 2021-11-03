function quizzer() {
  const flagId = getFlagCodes(flagJson)
  createQuizSection(flagId, flagJson[flagId])
}
function learning() {
  const flagId = getFlagCodes(flagJson)
  createLearnSection(flagId, flagJson[flagId])
}
function quizBot(value, answer) {
  console.log(value)
  console.log(answer)

  // if (value != answer) {
  //   const alert = alertHelper()
  //   contentArea.appendChild(alert)
  // } else {
  //   const success = successHelper()
  //   contentArea.appendChild(success)
  // }
}
