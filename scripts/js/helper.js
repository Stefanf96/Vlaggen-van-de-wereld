// function successHelper(message) {
//   const quizHelper = document.createElement('div')
//   quizHelper.className = 'alert alert-success alert-dismissible'
//   quizHelper.role = 'alert'
//   quizHelper.innerHTML = message

//   const closeButton = document.createElement('button')
//   closeButton.className = 'close'
//   closeButton.dataDismiss = 'alert'
//   closeButton.ariaLabel = 'close'

//   const spanClose = document.createElement('span')
//   spanClose.ariaHidden = 'true'
//   closeButton.appendChild(spanClose)

//   quizHelper.appendChild(closeButton)

//   return quizHelper
// }
// function alertHelper(message) {
//   const quizHelper = document.createElement('div')
//   quizHelper.className = 'alert alert-danger alert-dismissible'
//   quizHelper.role = 'alert'
//   quizHelper.innerHTML = message

//   const closeButton = document.createElement('button')
//   closeButton.className = 'close'
//   closeButton.dataDismiss = 'alert'
//   closeButton.ariaLabel = 'close'

//   const spanClose = document.createElement('span')
//   spanClose.ariaHidden = 'true'
//   closeButton.appendChild(spanClose)

//   quizHelper.appendChild(closeButton)

//   return quizHelper
// }

function successModal(message) {
  const getModal = createModal('Success', message)
  return getModal
}
function alertModal(message) {
  const getModal = createModal('Alert', message)
  return getModal
}
