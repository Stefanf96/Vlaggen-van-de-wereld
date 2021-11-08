function quizzer() {
  const flagId = getFlagCodes(flagJson);
  createQuizSection(flagId, flagJson[flagId]);
}
function learning() {
  const flagId = getFlagCodes(flagJson);
  createLearnSection(flagId, flagJson[flagId]);
}
function quizBot(value, answer) {
  if (value.toLowerCase() != answer.toLowerCase()) {
    const alert = alertHelper(
      `Thats Incorrect! The answer was <strong>${answer}</strong>`
    );
    contentArea.insertBefore(alert, row);
    setTimeout(function () {
      contentArea.removeChild(alert);
      quizzer();
    }, 2000);
  } else if (value.toLowerCase() == answer.toLowerCase()) {
    const success = successHelper(`Thats <strong>Correct!</strong>`);
    contentArea.insertBefore(success, row);
    setTimeout(function () {
      contentArea.removeChild(success);
      quizzer();
    }, 2000);
  }
}
function skipQuestion(answer) {
  const alert = alertHelper(`The answer was <strong>${answer}</strong>`);
  contentArea.insertBefore(alert, row);
  setTimeout(function () {
    contentArea.removeChild(alert);
    quizzer();
  }, 2000);
}
