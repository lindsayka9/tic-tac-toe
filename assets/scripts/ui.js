'use strict'

const store = require('./store')

const signInSuccess = function (data) {
  store.user = data.user
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#passwordButton').removeClass('hide')
  $('#sign-out-trigger').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#game').removeClass('hide')
  $('#sign-in-image').addClass('hide')
  $('#sign-in').modal('hide')
  $('#message').text('You have successfully signed in!')
  $('#sign-in-error').text('')
}

const signInFailure = function (error) {
  console.error(error)
  $('#sign-in-error').text('Incorrect Email and/or Password').css('color', 'red')
}

const signUpSuccess = function (data) {
  $('#sign-up-error').text('')
  $('#sign-up').modal('hide')
  $('#message').text('Successfully Signed Up!').css('color', 'green')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#sign-up-error').text('Error signing up').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#password-error').text('')
  $('#change-password').modal('hide')
  $('#message').text('Successfully changed password!').css('color', 'green')
  $('#change-password').find('input:password, input:password, select, textarea').val('')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#password-error').text('Error changing password').css('color', 'red')
  $('#change-password').find('input:password, input:password, select, textarea').val('')
}

const signOutSuccess = function (data) {
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#passwordButton').addClass('hide')
  $('#sign-out-trigger').addClass('hide')
  $('#new-game').addClass('hide')
  $('#games-finished').addClass('hide')
  $('#game').addClass('hide')
  $('sign-in-image').removeClass('hide')
  $('#message').text('Successfully signed out!').css('color', 'green')
  store.user = null
  $('#sign-in-error').text('')
  $('#password-error').text('')
  $('#sign-up-error').text('')
}

const signOutFailure = function (data) {
  $('#message').text('Error signing out').css('color', 'red')
}

const newGameSuccess = function (data) {
  store.game = data.game
  store.game.id = data.game.id
  store.game.over = data.game.over
  $('#games-finished').removeClass('hide')
}

const newGameFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  // store.game = data
  // console.log(store)
  // console.log(data)
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
