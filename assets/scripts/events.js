const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./store)')
// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

// create game board
let gameboard = ['', '', '', '', '', '', '', '', '']
let over = false
let turn = 0

const endofGame = function () {
  $('').text('The game is over. Click "New Game".')
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
  gameboard = ['', '', '', '', '', '', '', '', '']
  turn = 0
  over = false
  $('').text('')
  $('').text('')
  whoseTurn()
}

const onGameFinished = function (boolean) {
  if (boolean) {
    endofGame()
    over = true
  }
}

// even --> X odd --> O, create function to switch between turns
const evenOdd = function (i) {
  if (i % 2) {
    return false
  } else {
    return true
  }
}

const player = function (turn) {
  if (evenOdd(turn - 1)) {
    return 'X'
  } else {
    return 'O'
  }
}

const playerX = 'X'
const playerO = 'O'

const whoseTurn = function () {
  if (evenOdd(turn)) {
    $('')
  } else {
    $('')
  }
}

const onShowGames = function (event) {
  event.preventDefault()
  console.log(event)
  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game-button').on('click', onNewGame)
  $('#show-games-button').on('click', onShowGames)
  // $('#')
}

module.exports = {
  addHandlers
}
