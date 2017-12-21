'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully Signed Up!').css('color', 'green')
}

const signUpFailure = function (data) {
  $('#message').text('Error signing up').css('color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully Signed In!').css('color', 'green')
  store.user = data.user // save to what?
}

const signInFailure = function (data) {
  $('#message').text('Incorrect Email and/or Password').css('color', 'red')
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
