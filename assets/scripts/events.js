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
  $('#show-games-button').on('click', onShowGames)
}

module.exports = {
  addHandlers
}
