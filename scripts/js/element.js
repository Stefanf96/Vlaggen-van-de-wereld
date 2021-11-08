function createImage(id) {
  let image = document.createElement('img');
  image.src = `https://flagcdn.com/48x36/${id}.png`;
  image.srcset = `https://flagcdn.com/16x12/${id}.png 2x, https://flagcdn.com/48x36/${id}.png 3x`;
  image.className = 'flags';
  image.id = 'flagSprite';

  return image;
}
function createInputFieldGroup(answer) {
  const quiz = document.createElement('div');
  quiz.id = 'quizSection';
  quiz.className = 'box align-items-center justify-content-center p-3';

  const answerHidden = document.createElement('input');
  answerHidden.className = 'form-control';
  answerHidden.hidden = true;
  answerHidden.id = 'answerInput';
  answerHidden.type = 'text';
  answerHidden.value = answer;

  const input = document.createElement('input');
  input.className = 'form-control';
  input.id = 'quizzer';
  input.type = 'text';

  const submit = document.createElement('button');
  submit.innerText = `Check`;
  submit.type = 'button';
  submit.className = 'btn button quizButtons';
  submit.id = 'quizzerSubmit';
  submit.addEventListener('click', function () {
    quizBot(input.value, answer);
  });

  const skip = document.createElement('button');
  skip.innerText = `Skip`;
  skip.type = 'button';
  skip.className = 'btn button quizButtons';
  skip.id = 'quizzerSubmit';
  skip.addEventListener('click', function () {
    skipQuestion(answer);
  });
  const quizLabel = document.createElement('label');
  const quizLabelText = document.createTextNode(
    "What's the name of this flag?"
  );
  quizLabel.appendChild(quizLabelText);

  quiz.appendChild(answerHidden);
  quiz.appendChild(quizLabel);
  quiz.appendChild(input);
  quiz.appendChild(submit);
  quiz.appendChild(skip);

  return quiz;
}
function createFlagLabel(name) {
  let flagLabel = document.createElement('div');
  flagLabel.className = 'box align-items-center justify-content-center p-3';

  let flagName = document.createElement('h2');
  flagName.innerHTML = `This flag is from <strong>${name}</strong>`;
  flagLabel.appendChild(flagName);
  return flagLabel;
}
function createQuizSection(flagId, flagName) {
  if (!quizSection.className) {
    quizSection.className =
      'form-group box align-items-center justify-content-center p-3';
  }

  let image = createImage(flagId);
  let quizGroup = createInputFieldGroup(flagName);

  let flagExist = quizSection.querySelector('img');
  let quizGroupExist = quizSection.querySelector('#quizSection');

  if (flagExist != null && quizGroupExist != null) {
    quizSection.replaceChild(image, flagExist);
    quizSection.replaceChild(quizGroup, quizGroupExist);
  } else {
    quizSection.appendChild(image);
    quizSection.appendChild(quizGroup);
  }
}
function createLearnSection(flagId, flagName) {
  if (!flags.className) {
    flags.className = 'box align-items-center justify-content-center p-3';
  }

  let image = createImage(flagId, flagName);
  let imageLabel = createFlagLabel(flagName);
  let flagExist = flags.querySelector('img');
  let flagLabelExist = flags.querySelector('#flags > div');

  if (flagExist != null && flagLabelExist != null) {
    flags.replaceChild(image, flagExist);
    flags.replaceChild(imageLabel, flagLabelExist);
  } else {
    flags.appendChild(image);
    flags.appendChild(imageLabel);
  }
}
