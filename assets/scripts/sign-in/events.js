'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('../ui')
const api = require('../api')

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('#sign-in-form').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
