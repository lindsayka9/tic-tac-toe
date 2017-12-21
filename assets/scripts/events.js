const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

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

const onClick = function () {
  console.log('hello?')
}

const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#0').on('click', onClick)
  $('#1').on('click', onClick)
  $('#2').on('click', onClick)
  $('#3').on('click', onClick)
  $('#4').on('click', onClick)
  $('#5').on('click', onClick)
  $('#6').on('click', onClick)
  $('#7').on('click', onClick)
  $('#8').on('click', onClick)
}

module.exports = {
  addHandlers
}
