const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./store)')
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

const onClick0 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#0').text('something')
}

const onClick1 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#1').text('wut')
}

const onClick2 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#2').text('how')
}

const onClick3 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#3').text('how')
}

const onClick4 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#4').text('why')
}

const onClick5 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#5').text('how')
}

const onClick6 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#6').text('get')
}

const onClick7 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#7').text('it')
}

const onClick8 = function () {
  event.preventDefault()
  console.log(this.id)
  $('#8').text('done')
}

const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#0').on('click', onClick0)
  $('#1').on('click', onClick1)
  $('#2').on('click', onClick2)
  $('#3').on('click', onClick3)
  $('#4').on('click', onClick4)
  $('#5').on('click', onClick5)
  $('#6').on('click', onClick6)
  $('#7').on('click', onClick7)
  $('#8').on('click', onClick8)
  $('#new-game-button').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
