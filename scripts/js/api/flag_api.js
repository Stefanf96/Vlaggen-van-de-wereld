const flagAction = async () => {
  const response = await fetch('https://flagcdn.com/en/codes.json')
  const json = await response.json()
  return json
}
let flagJson = flagAction()

flagJson.then(function (result) {
  flagJson = result
  return flagJson
})
const flagArray = []
function getFlagCodes(jsonString) {
  let flagId
  const flagList = jsonString

  for (key in flagList) {
    if (
      key.includes('us-') ||
      flagList[key].includes('Island') ||
      flagList[key].includes('Islands') ||
      flagList[key].includes('Saint')
    ) {
      continue
    } else {
      flagArray.push(key)
    }
  }
  flagId = flagArray[Math.floor(Math.random() * flagArray.length)]
  return flagId
}
