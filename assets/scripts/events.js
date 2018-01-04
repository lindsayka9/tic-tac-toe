'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

let board = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let gameStart = false
const gameBegin = false
let gameOver = false
const emptyCell = ''
let over = false

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
      } else {
        player = 'X'
        $(cellId).text('O')
        board[this.id] = 'O'
        $('#message').text('X\'s turn!')
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

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  this.reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  this.reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  this.reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
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
  over = false
  gameStart = false
  $('#message').text('')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#new-game-button').on('click', onStartNewGame)
  $('#show-game-over').on('submit', onShowGameOver)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.box').on('click', onCellClick)
}

module.exports = {
  addHandlers
}
