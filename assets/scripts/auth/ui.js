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

const signUpSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successfully Signed Up!').css('color', 'green')
}

const signUpFailure = function (data) {
  $('#message').text('Error signing up').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password!').css('color', 'green')
}

const changePasswordFailure = function (data) {
  $('#message').text('Error changing password').css('color', 'red')
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out!').css('color', 'green')
  store.user = null
}

const signOutFailure = function (data) {
  $('#message').text('Error signing out').css('color', 'red')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
