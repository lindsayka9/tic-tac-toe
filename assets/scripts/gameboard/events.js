'use strict'

const store = require('../store')
const ui = require('./ui')
const api = require('./api')

const onStartGame = function () {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

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
//   api.updateGame(updateBox)
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

//
// const getData = function (box) {
//   return $(box).data('cell-index')
// }

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
  // show user profile
  $('#profile').show()
  // hide button
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
  // $('#0').on('click', boxClick)
  // $('#1').on('click', boxClick)
  // $('#2').on('click', boxClick)
  // $('#3').on('click', boxClick)
  // $('#4').on('click', boxClick)
  // $('#5').on('click', boxClick)
  // $('#6').on('click', boxClick)
  // $('#7').on('click', boxClick)
  // $('#8').on('click', boxClick)
  $('#0').on('click', makeAMove)
  $('#1').on('click', makeAMove)
  $('#2').on('click', makeAMove)
  $('#3').on('click', makeAMove)
  $('#4').on('click', makeAMove)
  $('#5').on('click', makeAMove)
  $('#6').on('click', makeAMove)
  $('#7').on('click', makeAMove)
  $('#8').on('click', makeAMove)
  $('#reset-game-button').on('click', resetGame)
  $('#new-game-button').on('click', onStartGame)
}

module.exports = {
  addHandlers
}
