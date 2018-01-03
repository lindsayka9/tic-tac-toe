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

const updateGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const watchGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id + 'watch',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  watchGame,
  showGame,
  showGames
}
