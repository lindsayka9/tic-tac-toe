const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./store)')
// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked
// let turn = 0
// const playerOne = 'X'
// const playerTwo = 'O'
// const emptyCell = ' '

// const makeMove = function (event) {
//   event.preventDefault()
//   if ($(this).text() !== emptyCell) {
//     console.log('make a move')
//   } else if (turn % 2 !== 0) {
//     $(this).text(playerOne)
//   } else {
//     $(this).text(playerTwo)
//   }
//   turn++
// }

const onBoxClick = function (event) {
  const boxId = '#' + this.id
  $(boxId).text('X')
}

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  $('#0').text('')
  $('#1').text('')
  $('#2').text('')
  $('#3').text('')
  $('#4').text('')
  $('#5').text('')
  $('#6').text('')
  $('#7').text('')
  $('#8').text('')
}

const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#0').on('click', onBoxClick)
  $('#1').on('click', onBoxClick)
  $('#2').on('click', onBoxClick)
  $('#3').on('click', onBoxClick)
  $('#4').on('click', onBoxClick)
  $('#5').on('click', onBoxClick)
  $('#6').on('click', onBoxClick)
  $('#7').on('click', onBoxClick)
  $('#8').on('click', onBoxClick)
  $('#new-game-button').on('click', onNewGame)
  $('')
}

module.exports = {
  addHandlers
}
