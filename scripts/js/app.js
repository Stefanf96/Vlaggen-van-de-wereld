function quizzer() {
  const flagId = getFlagCodes(flagJson);
  createQuizSection(flagId, flagJson[flagId]);
}
function learning() {
  const flagId = getFlagCodes(flagJson);
  createLearnSection(flagId, flagJson[flagId]);
}
