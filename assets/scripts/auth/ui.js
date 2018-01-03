'use strict'

const store = require('../store')

const signInSuccess = function (data) {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#new-game-button').removeClass('hide')
  $('#reset-game-button').removeClass('hide')
  $('#quit-game-button').removeClass('hide')
  $('#show-games-button').removeClass('hide')
  $('#game').removeClass('hide')
  $('#sign-in-image').addClass('hide')
  $('#message').text('Successfully Signed In!').css('color', 'green')
  store.user = data.user // save to what?
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Incorrect Email and/or Password').css('color', 'red')
}

const signUpSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successfully Signed Up!').css('color', 'green')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error signing up').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password!').css('color', 'green')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password').css('color', 'red')
}

const signOutSuccess = function (data) {
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game-button').addClass('hide')
  $('#reset-game-button').addClass('hide')
  $('#quit-game-button').addClass('hide')
  $('#show-games-button').addClass('hide')
  $('#game').addClass('hide')
  $('sign-in-image').removeClass('hide')
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
