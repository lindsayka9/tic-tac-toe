'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const gameApi = require('../board/api')

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
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// starts a new game
const startGame = function () {
  gameApi.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const quit = function () {
  const resetGame = function () {
    store.game = null
    store.turn = null
    store.currentPlayer = null
    store.currentIndex = null
    // show user profile
    $('#profile').show()
    //hide button
    $('#reset-game').hide()
    // clear all cells
    $('#0').html('')
    $('#1').html('')
    $('#2').html('')
    $('#3').html('')
    $('#4').html('')
    $('#5').html('')
    $('#6').html('')
    $('#7').html('')
    $('#8').html('')
    $('#message').text('')
  }

const addHandlers = function () {
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
