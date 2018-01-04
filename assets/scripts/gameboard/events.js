'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const ui = require('./ui')
const gameApi = require('./api')

const onStartNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// let board = ['', '', '', '', '', '', '', '', '']
// let over = false
// let gameStart = false
// let playerToken = 'X'
// let gameOver = false

// function to make move
// const makeMove = function (move, index) {
//   const updateArray = {
//     game: {
//       cell: {
//         index: index,
//         value: move
//       },
//       over: false
//     }
//   }
//   // add move to api array of game
//   const updateBox = JSON.stringify(updateArray)
//   gameApi.updateGame(updateBox)
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

//
// const getData = function (box) {
//   return $(box).data('cell-index')
// }
//
let turn = 0
const playerOne = 'X'
const playerTwo = 'O'
const emptyCell = ''

const makeAMove = function (event) {
  event.preventDefault()
  if ($(this).text() !== emptyCell) {
    console.log('make a valid move')
  } else if (turn % 2 !== 0) {
    $(this).text(playerOne)
  } else {
    $(this).text(playerTwo)
  }
  turn++
}

// const moveOnBoard = function(boxId) {
//   const htmlX =
//   const htmlO =
// }
//
// const boxClick = function () {
//   const boxId = '#' + this.id
//   // if game isn't done, mark board, if it is, tell the player
//   if (store.game.over !== true) {
//     moveOnBoard(boxId)
//   } else {
//     $('#message').text('Game is over.')
//   }
// }

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

const onShowGames = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  gameApi.showGames(data)
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const onShowGame = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  gameApi.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
  $('#show-game').find('input:text, input:password, select, textarea').val('')
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
  $('#0').on('click', makeAMove)
  $('#1').on('click', makeAMove)
  $('#2').on('click', makeAMove)
  $('#3').on('click', makeAMove)
  $('#4').on('click', makeAMove)
  $('#5').on('click', makeAMove)
  $('#6').on('click', makeAMove)
  $('#7').on('click', makeAMove)
  $('#8').on('click', makeAMove)
  $('#reset-game-button').on('submit', resetGame)
  $('#new-game-button').on('submit', onStartNewGame)
  $('#show-games-button').on('submit', onShowGames)
  $('#show-game-button').on('submit', onShowGame)
  $('#update-game-button').on('submit', onUpdateGame)
  $('#show-game-over').on('submit', onShowGameOver)
}

module.exports = {
  addHandlers
}
