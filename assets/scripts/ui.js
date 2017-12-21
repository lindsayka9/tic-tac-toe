'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully Signed In!').css('color', 'green')
  store.user = data.user // save to what?
  console.log('store: ', store)
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Incorrect Email and/or Password').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password!').css('color', 'green')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password').css('color', 'red')
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out!').css('color', 'green')
  store.user = null
  console.log(store)
}

const signOutFailure = function (error) {
  console.error(error)
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
