'use strict'

const config = require('../config')
const store = require('../store')
const gameApi = require('./api')
const ui = require('./ui')

const ticGame = {
  game: {
    cell: {
      index: index,
      value: 'X'
    },
    over: false
  },
  id: '',
  turn: 'X',
  cells: ['', '', '', '', '', '', '', '', ''],
  over: false
}
//
// const changePlayer = {
//   ticGame.turn = (ticGame.turn === 'O') ? 'X' : 'O'
// }

let turnCount = 0



module.exports = {

}
