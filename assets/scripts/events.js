'use strict'

const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./store')

let board = ['', '', '', '', '', '', '', '', '']

let playerToken = 'X'
let gameStart = false
let gameBegin = false
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
  if ((board[0] === board[3]) && (board[0] === board[6]) && (board[0] !== '')) {
    return true
  } else if ((board[1] === board[4]) && (board[1] === board[7]) && (board[1] !== '')) {
    return true
  } else if ((board[2] === board[5]) && (board[2] === board[8]) && (board[2] !== '')) {
    return true
  }
  // horizontal
  if ((board[0] === board[1]) && (board[0] === board[2]) && (board[0] !== '')) {
    return true
  } else if ((board[3] === board[4]) && (board[3] === board[5]) && (board[3] !== '')) {
    return true
  } else if ((board[6] === board[7]) && (board[6] === board[8]) && (board[6] !== '')) {
    return true
  // diagonal
  } else if ((board[0] === board[4]) && (board[0] === board[8]) && (board[0] !== '')) {
    return true
  } else if ((board[2] === board[4]) && (board[2] === board[6]) && (board[2] !== '')) {
    return true
  } else {
    return false
  }
}

const onCellClick = function (event) {
  const cellId = '#' + this.id
  const cellIdUpdate = event.target.id
  if (gameOver === true) {
    return
  }
  if (gameStart === false) {
    $('#message').text('Click "New Game" to start playing')
    return
  }
  if ($(cellId).text() === emptyCell) {
    if (playerToken === 'X') {
      $(cellId).text('X')
      board[this.id] = 'x'
      playerToken = 'O'
      if (fullGameBoard(board) === false) {
        $('#message').text('O\'s turn!')
        onUpdateGame(cellIdUpdate)
      } else if (whoWon() === false) {
        $('#message').text('It\'s a TIE!')
        over = true
        onUpdateGame(cellIdUpdate)
      }
    } else {
      playerToken = 'X'
      $(cellId).text('O')
      board[this.id] = 'o'
      $('#message').text('X\'s turn!')
      onUpdateGame(cellIdUpdate)
    }
  } else if (fullGameBoard(board) === false) {
    $('#message').text('That box is occupied. Please make a valid move.')
  }
  if (whoWon() === true) {
    if (playerToken === 'X') {
      $('#message').text('O Wins!')
      onUpdateGame(cellIdUpdate)
    } else $('#message').text('X Wins!')
    onUpdateGame(cellIdUpdate)
    gameOver = true
    onUpdateGame(cellIdUpdate)
  }
}

const onStartNewGame = function (event) {
  event.preventDefault()
  let game = 0
  if (gameBegin === false) {
    return
  }
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
    gameOver = false
    gameStart = true
    playerToken = 'X'
  }
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onUpdateGame = function (cellId) {
  if (emptyCell !== '') {
    return
  }
  if ((whoWon() === true) || (fullGameBoard(board) === true)) {
    over = true
  }
  if (playerToken === 'O') {
    const changeX = {
      game: {
        cell: {
          index: cellId,
          value: 'x'
        },
        over: over
      }
    }
    const dataObject = JSON.stringify(changeX)
    api.updateGame(dataObject)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else if (playerToken === 'X') {
    const changeO = {
      game: {
        cell: {
          index: cellId,
          value: 'o'
        },
        over: over
      }
    }
    const dataObject = JSON.stringify(changeO)
    api.updateGame(dataObject)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

const onShowGameOver = function (event) {
  event.preventDefault()
  api.showGameOver()
    .then(ui.showGameOverSuccess)
    .catch(ui.showGameOverFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  gameBegin = true
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#password-change').find('input:text, input:password, select, textarea').val('')
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
  $('.squareCell').on('click', onCellClick)
  $('.squareCell').on('click', onUpdateGame)
  $('#new-game').on('click', onStartNewGame)
  $('#games-finished').on('click', onShowGameOver)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  // $('#signOutButton').on('click', onSignOut)
  $('#sign-out-trigger').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
