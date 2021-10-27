const flagAction = async () => {
  const response = await fetch('https://flagcdn.com/en/codes.json')
  const json = await response.json()
  return json
}
const flagJson = flagAction()
flagJson.then(function (result) {
  flagJson = result
  return flagJson
})
function quizzer() {
  const flagId = getFlagCodes(flagJson)
  createQuizSection(flagId, flagJson[flagId])
}
function learning() {
  const flagId = getFlagCodes(flagJson)
  createLearnSection(flagId, flagJson[flagId])
}
function getFlagCodes(jsonString) {
  let flagId
  console.log(jsonString)
  // const flagArray = []
  // const flagList = jsonString
  // for (key in flagList) {
  //   if (key.includes('us-')) {
  //     continue
  //   } else {
  //     flagArray.push(key)
  //   }
  // }

  // flagId = flagArray[Math.floor(Math.random() * flagArray.length)]
  // return flagId
}
