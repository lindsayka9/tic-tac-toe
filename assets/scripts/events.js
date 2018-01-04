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

let board = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let over = false
let gameStart = false
let gameBegin = false
let gameOver = false
const emptyCell = ''

const onStartNewGame = function (event) {
  event.preventDefault()
  if (gameBegin === false) {
    return
  }
  let game = 0
  gameStart = true
  $('#message').text('X - Make the first move, don\'t be shy!')
  over = false
  game += 1
  if (game >= 1) {
    board = ['', '', '', '', '', '', '', '', '']
    $('#0').text('')
    $('#1').text('')
    $('#2').text('')
    $('#3').text('')
    $('#4').text('')
    $('#5').text('')
    $('#6').text('')
    $('#7').text('')
    $('#8').text('')
    gameStart = true
    gameOver = false
    player = 'X'
  }
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const fullGameBoard = function (board) {
  for (let i = 0; i <= board.length; i++) {
    if (board[i] === '') {
      return false
    }
  }
}

const whoWon = function () {
  // vertical
  if ((board[0] !== '') && (board[0] === board[3]) && (board[0] === board[6])) {
    return true
  } else if ((board[1] !== '') && (board[1] === board[4]) && (board[1] === board[7])) {
    return true
  } else if ((board[2] !== '') && (board[2] === board[5]) && (board[2] === board[8])) {
    return true
  }
  // horizontal
  if ((board[0] !== '') && (board[0] === board[1]) && (board[0] === board[2])) {
    return true
  } else if ((board[3] !== '') && (board[3] === board[4]) && (board[3] === board[5])) {
    return true
  } else if ((board[6] !== '') && (board[6] === board[7]) && (board[6] === board[8])) {
    return true
  }
  // diagonal
  if ((board[0] !== '') && (board[0] === board[4]) && (board[0] === board[6])) {
    return true
  } else if ((board[2] !== '') && (board[2] === board[4]) && (board[2] === board[8])) {
    return true
  } else {
    return false
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
    if (player === 'X') {
      $(cellId).text('X')
      board[this.id] = 'X'
      player = 'O'
      if (fullGameBoard(board) !== true) {
        $('#message').text('O\'s turn!')
        onUpdateGame(cellIdUpdate)
      } else if (whoWon() === false) {
        $('#message').text('It\'s a TIE!')
        over = true
        onUpdateGame(cellIdUpdate)
      }
    } else if (fullGameBoard(board) === false) {
      $('#message').text('That box is occupied. Please make a valid move.')
    }
    if (whoWon() === true) {
      if (player === 'X') {
        $('#message').text('O Wins!')
        onUpdateGame(cellIdUpdate)
      } else {
        $('#message').text('X Wins!')
        onUpdateGame(cellIdUpdate)
      }
      gameOver = true
      onUpdateGame(cellIdUpdate)
    }
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
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  $('#update-game-button').find('input:text, input:password, select, textarea').val('')
}

const onShowGameOver = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.showGameOver(data)
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
