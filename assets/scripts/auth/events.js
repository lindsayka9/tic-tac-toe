'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const ui = require('./ui')
const api = require('./api')
const gameApi = require('../gameboard/api')
const gameboard = require('../gameboard/events')

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
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
  const data = store
  console.log(data)
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// starts a new game
const onStartGame = function () {
  gameApi.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onQuit = function () {
  gameboard.events.resetGame()
}

const addHandlers = function () {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#quit-game-button').on('submit', onQuit)
  $('#new-game-button').on('submit', onStartGame)
}

module.exports = {
  addHandlers
}
