// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./store)')

const onShowGames = function (event) {
  event.preventDefault()
  console.log(event)
  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const addHandlers = function () {
  // $('#sign-up-form').on('submit', onSignUp)
  // $('#sign-in-form').on('submit', onSignIn)
  // $('#change-password-form').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
  // $('#new-game-button').on('click', onNewGame)
  $('#show-games-button').on('click', onShowGames)
  // $('#')
}

module.exports = {
  addHandlers
}
