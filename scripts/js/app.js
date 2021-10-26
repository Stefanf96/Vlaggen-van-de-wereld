const flagAction = async () => {
  const response = await fetch('https://flagcdn.com/en/codes.json');
  const flags = await response.json(); //extract JSON from the http response

  // do something with myJson
  return JSON.stringify(flags);

  //addFlags(flagsJson);
};
const flagJson = flagAction();

function getFlags() {
  const json = flagJson;
  const flagId = getFlagCodes(json);
  showRandomFlag(flagId);
}
function quizFlag() {
  const json = flagJson;
  createQuizSection(flagJson);
}
function showRandomFlag(json) {
  createLearnSection(flagId, json[flagId]);
}

function createQuizSection(flagId, flagName) {
  let image = createImage(flagId, flagName);
  let inputField = createInputField(image.alt);

  let flagExist = flags.querySelector('img');
  let inputExist = flags.querySelector('input');

  if (flagExist && inputExist) {
    flags.replaceChild(image, flagExist);
    flags.replaceChild(inputField, inputExist);
  } else {
    flags.appendChild(image);
    flags.appendChild(inputField);
  }
}
function createLearnSection(flagId, flagName) {
  let image = createImage(flagId, flagName);

  let flagExist = flags.querySelector('img');
  let flagHeaderExist = flags.querySelector('h1');

  if (flagExist && flagHeaderExist) {
    flags.replaceChild(image, flagExist);
    flags.replaceChild(image, flagExist);
  } else {
    flags.appendChild(image);
  }
}
function createImageSectior(id, name) {
  let image = document.createElement('img');
  image.src = `https://flagcdn.com/48x36/${id}.png`;
  image.srcset = `https://flagcdn.com/16x12/${id}.png 2x, https://flagcdn.com/48x36/${id}.png 3x`;
  image.className = 'flags';
  image.alt = name;

  return image;
}
function createInputField(imageName) {
  let quizLabel = document.createElement('input');
  let quiz = document.createElement('input');
  quiz.className = 'form-control';
  quiz.id = 'quizzer';
  quiz.type = 'text';

  return quiz;
}
function getFlagCodes(json) {
  let flagId;
  const flagArray = [];
  const flagParsed = JSON.parse(json);
  for (key in flagParsed) {
    if (key.includes('us-')) {
      console.log(key);
      continue;
    } else {
      flagArray.push(key);
    }
  }
  flagId = flagArray[Math.floor(Math.random() * flagArray.length)];
}
