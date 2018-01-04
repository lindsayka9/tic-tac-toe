'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const ui = require('./ui')
const api = require('./api')

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').find('input:text, input:password, input:password, select, textarea').val('')
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password').find('input:password, input:password, select, textarea').val('')
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = store
  console.log(data)
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let board = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let over = false
let gameStart = false
let gameOver = false
const emptyCell = ''

const fullGameBoard = function (board) {
  for (let i = 0; i <= board.length; i++) {
    if (board[i] === '') {
      return false
    }
  }
}

const onCellClick = function (event) {
  const cellId = '#' + this.id
  const cellIdUpdate = cellId
  if (gameOver === true) {
    return
  }
  if (gameStart === false) {
    $('#message').text('Click "New Game" to start playing')
    return
  }
  if ($(cellId).text() === emptyCell) {

  }
}

// reset game/store file
const resetGame = function () {
  store.game = null
  store.turn = null
  store.currentPlayer = null
  store.currentIndex = null
  // hide button
  $('#reset-game-button').hide()
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

const onUpdateGame = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  console.log('HI?')
  gameApi.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  $('#update-game-button').find('input:text, input:password, select, textarea').val('')
}

const onShowGameOver = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  gameApi.showGameOver(data)
    .then(ui.showGameOverSuccess)
    .catch(ui.showGameOverFailure)
}

const addHandlers = function () {
  $('#reset-game-button').on('submit', resetGame)
  $('#new-game-button').on('submit', onStartNewGame)
  $('#update-game-button').on('submit', onUpdateGame)
  $('#show-game-over').on('submit', onShowGameOver)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
