'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successfully Signed Up!').css('color', 'green')
}

const signUpFailure = function (data) {
  $('#message').text('Error signing up').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
