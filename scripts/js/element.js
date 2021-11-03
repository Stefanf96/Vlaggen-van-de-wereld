function createImage(id, name) {
  let image = document.createElement('img')
  image.src = `https://flagcdn.com/48x36/${id}.png`
  image.srcset = `https://flagcdn.com/16x12/${id}.png 2x, https://flagcdn.com/48x36/${id}.png 3x`
  image.className = 'flags'
  image.id = 'flagSprite'
  image.alt = name

  return image
}
function createInputFieldGroup() {
  const quiz = document.createElement('div')
  quiz.id = 'quizSection'
  quiz.className = 'box align-items-center justify-content-center p-3'

  const input = document.createElement('input')
  input.className = 'form-control'
  input.id = 'quizzer'
  input.type = 'text'

  const submit = document.createElement('button')
  const submitValue = document.createTextNode('Check')
  submit.type = 'button'
  submit.className = 'btn button'
  submit.id = 'quizzerSubmit'
  submit.appendChild(submitValue)

  const quizLabel = document.createElement('label')
  const quizLabelText = document.createTextNode('Wat is de naam van deze vlag?:')
  quizLabel.appendChild(quizLabelText)

  quiz.appendChild(quizLabel)
  quiz.appendChild(input)
  quiz.appendChild(submit)

  return quiz
}
function createFlagLabel(name) {
  let flagName = document.createElement('h1')
  let flagText = document.createTextNode(name)
  flagName.appendChild(flagText)
  return flagName
}
function createQuizSection(flagId, flagName) {
  let image = createImage(flagId, flagName)
  let quizGroup = createInputFieldGroup()

  let flagExist = quizSection.querySelector('img')
  let quizGroupExist = quizSection.querySelector('#quizSection')

  if (flagExist != null && quizGroupExist != null) {
    quizSection.replaceChild(image, flagExist)
    quizSection.replaceChild(quizGroup, quizGroupExist)
  } else {
    quizSection.appendChild(image)
    quizSection.appendChild(quizGroup)
  }
}
function createLearnSection(flagId, flagName) {
  let image = createImage(flagId, flagName)
  let imageLabel = createFlagLabel(flagName)

  let flagExist = flags.querySelector('img')
  let flagHeaderExist = flags.querySelector('h1')

  if (flagExist != null && flagHeaderExist != null) {
    flags.replaceChild(image, flagExist)
    flags.replaceChild(imageLabel, flagHeaderExist)
  } else {
    flags.appendChild(image)
    flags.appendChild(imageLabel)
  }
}
