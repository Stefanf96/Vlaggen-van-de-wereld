function createImage(id) {
  let image = document.createElement('img')
  image.src = `https://flagcdn.com/48x36/${id}.png`
  image.srcset = `https://flagcdn.com/16x12/${id}.png 2x, https://flagcdn.com/48x36/${id}.png 3x`
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
  quizColumn.className = 'col text-center'
  quizColumn.id = 'quizColumn'
  quiz.id = 'quiz'
  quizColumn.appendChild(quiz)

  if (row.firstChild == null) {
    row.appendChild(quizColumn)
  } else {
    for (let i = 0; i < row.children.length; i++) {
      if (row.children[i].id == quizColumn.id) {
        row.replaceChild(quizColumn, row.children[i])
      } else if (row.children[i].id != quizColumn.id) {
        row.appendChild(quizColumn)
      }
      // } else if (row.children[0] == quizColumn) {
      //   row.insertBefore(quizColumn, row.children[0])
      // }
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
  let learning = document.createElement('div')
  learnColumn.className = 'col text-center'
  learnColumn.id = 'learnColumn'
  learning.id = 'flags'
  learnColumn.appendChild(learning)
  if (row.firstChild == null) {
    row.appendChild(learnColumn)
  } else {
    for (let i = 0; i < row.children.length; i++) {
      if (row.children[i].id == learnColumn.id) {
        row.replaceChild(learnColumn, row.children[i])
      } else if (row.children[i].id != quizColumn.id) {
        row.appendChild(learnColumn)
      }
    }
  }

  if (!learning.className) {
    learning.className = 'box align-items-center justify-content-center p-3'
  }

  let image = createImage(flagId, flagName)
  let imageLabel = createFlagLabel(flagName)
  let flagExist = learning.querySelector('img')
  let flagLabelExist = learning.querySelector('#flags > div')

  if (flagExist != null && flagLabelExist != null) {
    learning.replaceChild(image, flagExist)
    learning.replaceChild(imageLabel, flagLabelExist)
  } else {
    learning.appendChild(image)
    learning.appendChild(imageLabel)
  }
}
