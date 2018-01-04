'use strict'

const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-Type': 'application/json'
    },
    data
  })
}
//
// const showGames = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const showGameOver = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-Type': 'application/json'
    },
    data
  })
}

module.exports = {
  newGame,
  updateGame,
  // showGame,
  // showGames,
  showGameOver
}
