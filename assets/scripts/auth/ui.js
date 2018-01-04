'use strict'

const store = require('../store')
// const game = require('../gameboard/games')

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#reset-game').removeClass('hide')
  $('#quit-game').removeClass('hide')
  $('#show-game').removeClass('hide')
  $('#show-games').removeClass('hide')
  $('#update-game').removeClass('hide')
  $('#game').removeClass('hide')
  $('#sign-in-image').addClass('hide')
  $('#message').text('Successfully Signed In!').css('color', 'green')
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
  $('#new-game').addClass('hide')
  $('#reset-game').addClass('hide')
  $('#quit-game').addClass('hide')
  $('#show-games').addClass('hide')
  $('#show-game').addClass('hide')
  $('#update-game').addClass('hide')
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
