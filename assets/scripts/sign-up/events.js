'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('../ui')
const api = require('../api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
