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
function getFlagCodes(jsonString) {
  let flagId
  const flagArray = []
  const flagList = jsonString
  for (key in flagList) {
    if (key.includes('us-') || flagList[key].includes('Islands')) {
      continue
    } else {
      flagArray.push(key)
    }
  }
  flagId = flagArray[Math.floor(Math.random() * flagArray.length)]
  return flagId
}
