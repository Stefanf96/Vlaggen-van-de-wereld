function createImage(id) {
  let image = document.createElement('img')
  image.src = `https://flagcdn.com/48x36/${id}.png`
  image.className = 'flags'
  image.id = 'flagSprite'

  return image
}
function createInputFieldGroup(answer) {
  const quiz = document.createElement('div')
  quiz.id = 'quizSection'
  quiz.className = 'box align-items-center justify-content-center p-3'

  const answerHidden = document.createElement('input')
  answerHidden.className = 'form-control d-none'
  answerHidden.id = 'answerInput'
  answerHidden.type = 'text'
  answerHidden.value = answer

  const input = document.createElement('input')
  input.className = 'form-control'
  input.id = 'quizzer'
  input.type = 'text'
  input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      quizBot(input.value, answer, event)
    }
  })

  const submit = document.createElement('button')
  submit.innerText = `Check`
  submit.type = 'button'
  submit.className = 'btn button quizButtons'
  submit.id = 'quizzerSubmit'
  submit.addEventListener('click', function (event) {
    quizBot(input.value, answer, event)
  })

  const skip = document.createElement('button')
  skip.innerText = `Skip`
  skip.type = 'button'
  skip.className = 'btn button quizButtons'
  skip.id = 'skipQuestionButton'
  skip.addEventListener('click', function (event) {
    skipQuestion(answer, event)
  })
  const quizLabel = document.createElement('label')
  const quizLabelText = document.createTextNode("What's the name of this flag?")
  quizLabel.appendChild(quizLabelText)

  quiz.appendChild(answerHidden)
  quiz.appendChild(quizLabel)
  quiz.appendChild(input)
  quiz.appendChild(submit)
  quiz.appendChild(skip)

  return quiz
}
function createFlagLabel(name) {
  let flagLabel = document.createElement('div')
  flagLabel.className = 'box align-items-center justify-content-center p-3'

  let flagName = document.createElement('h2')
  flagName.innerHTML = `This flag is from <strong>${name}</strong>`
  flagLabel.appendChild(flagName)
  return flagLabel
}
function createQuizSection(flagId, flagName) {
  let quizColumn = document.createElement('div')
  let quiz = document.createElement('div')
  quizColumn.className = 'col text-center column'
  quizColumn.id = 'quizColumn'
  quiz.id = 'quiz'
  quizColumn.appendChild(quiz)

  if (row.firstChild == null) {
    row.appendChild(quizColumn)
  } else {
    for (let i = 0; i < row.children.length; i++) {
      if (row.children[i].id == quizColumn.id) {
        row.replaceChild(quizColumn, row.children[i])
      } else {
        row.appendChild(quizColumn)
      }
    }
  }

  if (!quiz.className) {
    quiz.className =
      'form-group box align-items-center justify-content-center p-3'
  }

  let image = createImage(flagId)
  let quizGroup = createInputFieldGroup(flagName)

  let flagExist = quiz.querySelector('img')
  let quizGroupExist = quiz.querySelector('#quizSection')

  if (flagExist != null && quizGroupExquizist != null) {
    quiz.replaceChild(image, flagExist)
    quiz.replaceChild(quizGroup, quizGroupExist)
  } else {
    quiz.appendChild(image)
    quiz.appendChild(quizGroup)
  }
}
function createLearnSection(flagId, flagName) {
  let learnColumn = document.createElement('div')
  let learningImageSection = document.createElement('div')
  learnColumn.className = 'col text-center column'
  learnColumn.id = 'learnColumn'
  learningImageSection.id = 'flags'
  learnColumn.appendChild(learningImageSection)

  if (row.firstChild == null) {
    row.appendChild(learnColumn)
  } else {
    for (let i = 0; i < row.children.length; i++) {
      if (row.children[i].id == learnColumn.id) {
        row.replaceChild(learnColumn, row.children[i])
      } else if (row.children[0].id != learnColumn.id) {
        row.insertBefore(learnColumn, row.children[0])
      }
    }
  }

  if (!learningImageSection.className) {
    learningImageSection.className =
      'box align-items-center justify-content-center p-3'
  }

  let image = createImage(flagId, flagName)
  let imageLabel = createFlagLabel(flagName)
  const newFlag = document.createElement('button')
  newFlag.innerText = `Learn a new flag`
  newFlag.type = 'button'
  newFlag.id = 'newFlag'
  newFlag.className = 'btn button'
  newFlag.addEventListener('click', learning)

  let flagExist = learningImageSection.querySelector('img')
  let flagLabelExist = learningImageSection.querySelector('#flags > div')
  let buttonExist = learningImageSection.querySelector('#flags > button')

  if (flagExist != null && flagLabelExist != null) {
    learningImageSection.replaceChild(image, flagExist)
    learningImageSection.replaceChild(imageLabel, flagLabelExist)
    learningImageSection.replaceChild(newFlag, buttonExist)
  } else {
    learningImageSection.appendChild(image)
    learningImageSection.appendChild(imageLabel)
    learningImageSection.appendChild(newFlag)
  }
}
