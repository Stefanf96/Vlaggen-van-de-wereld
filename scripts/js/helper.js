function successHelper(message) {
  const quizHelper = document.createElement('div');
  quizHelper.className = 'alert alert-success alert-dismissible';
  quizHelper.role = 'alert';

  const boldElement = document.createElement('STRONG');
  const successMessage = document.createTextNode(message);
  boldElement.appendChild(successMessage);

  quizHelper.appendChild(boldElement);

  const closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.dataDismiss = 'alert';
  closeButton.ariaLabel = 'close';

  const spanClose = document.createElement('span');
  spanClose.ariaHidden = 'true';
  closeButton.appendChild(spanClose);

  quizHelper.appendChild(closeButton);

  return quizHelper;
}
function alertHelper(message) {
  const quizHelper = document.createElement('div');
  quizHelper.className = 'alert alert-danger alert-dismissible';
  quizHelper.role = 'alert';

  const boldElement = document.createElement('STRONG');
  const alertMessage = document.createTextNode(message);
  boldElement.appendChild(alertMessage);

  quizHelper.appendChild(boldElement);

  const closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.dataDismiss = 'alert';
  closeButton.ariaLabel = 'close';

  const spanClose = document.createElement('span');
  spanClose.ariaHidden = 'true';
  closeButton.appendChild(spanClose);

  quizHelper.appendChild(closeButton);

  return quizHelper;
}
