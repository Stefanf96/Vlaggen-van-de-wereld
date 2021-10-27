function createImage(id, name) {
  let image = document.createElement('img')
  image.src = `https://flagcdn.com/48x36/${id}.png`
  image.srcset = `https://flagcdn.com/16x12/${id}.png 2x, https://flagcdn.com/48x36/${id}.png 3x`
  image.className = 'flags'
  image.alt = name

  return image
}
function createInputField() {
  let quiz = document.createElement('input')
  quiz.className = 'form-control'
  quiz.id = 'quizzer'
  quiz.type = 'text'

  return quiz
}
function createFlagLabel(name) {
  let flagName = document.createElement('h1')
  let flagText = document.createTextNode(name)
  flagName.innerText = flagText
  return flagName
}
function createQuestionLabel() {
  let quizLabel = document.createElement('label')
  let quizLabelText = document.createTextNode('Wat is de naam van deze vlag?:')
  quizLabel.innerText = quizLabelText

  return quizLabel
}
function createQuizSection(flagId, flagName) {
  let image = createImage(flagId, flagName)
  let inputField = createInputField(image.alt)

  let flagExist = flags.querySelector('img')
  let inputExist = flags.querySelector('input')

  if (flagExist && inputExist) {
    flags.replaceChild(image, flagExist)
    flags.replaceChild(inputField, inputExist)
  } else {
    flags.appendChild(image)
    flags.appendChild(inputField)
  }
}
function createLearnSection(flagId, flagName) {
  let image = createImage(flagId, flagName)
  let imageLabel = createQuestionLabel(flagName)

  let flagExist = flags.querySelector('img')
  let flagHeaderExist = flags.querySelector('h1')

  if (flagExist && flagHeaderExist) {
    flags.replaceChild(image, flagExist)
    flags.replaceChild(imageLabel, flagHeaderExist)
  } else {
    flags.appendChild(image)
    flags.appendChild(imageLabel)
  }
}
