'use strict'

const store = require('../store')

const signInSuccess = function (data) {
  $('#sign-in').hide()
  $('user-profile').show()
  $('#message').text('Successfully Signed In!').css('color', 'green')
  store.user = data.user // save to what?
}

const signInFailure = function (data) {
  $('#message').text('Incorrect Email and/or Password').css('color', 'red')
}

module.exports = {
  signInSuccess,
  signInFailure
}
