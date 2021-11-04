function quizzer() {
  const flagId = getFlagCodes(flagJson);
  createQuizSection(flagId, flagJson[flagId]);
}
function learning() {
  const flagId = getFlagCodes(flagJson);
  createLearnSection(flagId, flagJson[flagId]);
}
function quizBot(value, answer) {
  if (value != answer) {
    const alert = alertHelper('Thats Incorrect! Try Again');
    contentArea.insertBefore(alert, row);
  } else {
    const success = successHelper('Thats Correct!');
    contentArea.insertBefore(success, row);
    setTimeout(function () {
      contentArea.removeChild(success);
      quizzer();
    }, 2000);
  }
}
