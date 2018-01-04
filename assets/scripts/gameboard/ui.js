'use strict'

const store = require('../store')
const game = require('./game')

const newGameSuccess = function (data) {
  $('#message').text('Successfully saved game').css('color', 'green')
  store['game'] = data.game
  console.log(store)
  const gameHtml = (
    `<ul>
    <h3>Game:</h3>
      <li>ID: ${data.game.id}</li>
    </ul>`
  )
  $('#new-content').append(gameHtml)
}

const newGameFailure = function (data) {
  $('#message').text('Error creating new game').css('color', 'red')
}

const showGameSuccess = function (data) {
  // const gameHtml = (
  //   `<ul>
  //   <h3>Game:</h3>
  //     <li>ID: ${data.game.id}</li>
  //   </ul>`
  // )
  // $('#content').append(gameHtml)
  $('#message').text('Successfully changed password!').css('color', 'green')
}

const showGameFailure = function (data) {
  $('#message').text('Error changing password').css('color', 'red')
}

const showGamesSuccess = function (data) {
  const gameHtml = (
    `<ul>
    <h3>Game:</h3>
      <li>ID: ${data.game.id}</li>
    </ul>`
  )
  $('#content').append(gameHtml)
  $('#message').text('Successfully changed password!').css('color', 'green')
  console.log(data)
}

const showGamesFailure = function (data) {
  $('#message').text('Error changing password').css('color', 'red')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  showGameSuccess,
  showGameFailure,
  showGamesSuccess,
  showGamesFailure
}
