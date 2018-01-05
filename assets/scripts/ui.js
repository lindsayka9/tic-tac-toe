'use strict'

const store = require('./store')

const signInSuccess = function (data) {
  store.user = data.user
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#passwordButton').removeClass('hide')
  $('#sign-out-trigger').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#games-finished').removeClass('hide')
  $('#game').removeClass('hide')
  $('#sign-in-image').addClass('hide')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Incorrect Email and/or Password').css('color', 'red')
}

const signUpSuccess = function (data) {
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
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#passwordButton').hide()
  $('#sign-out-trigger').addClass('hide')
  $('#new-game').addClass('hide')
  $('#games-finished').addClass('hide')
  $('#game').addClass('hide')
  $('sign-in-image').removeClass('hide')
  $('#message').text('Successfully signed out!').css('color', 'green')
  store.user = null
}

const signOutFailure = function (data) {
  $('#message').text('Error signing out').css('color', 'red')
}

const newGameSuccess = function (data) {
  store.gameInfo = data
}

const newGameFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  store.updatedGame = data
}

const updateGameFailure = function (error) {
  console.error(error)
}

const showGameOverSuccess = function (data) {
  store.stats = data
  $('#message').text('You have finished ' + store.stats.games.length + ' games')
}

const showGameOverFailure = function (error) {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  showGameOverSuccess,
  showGameOverFailure
}
