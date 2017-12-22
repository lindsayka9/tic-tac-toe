'use strict'

const store = require('./store')

const gameArray = ['', '', '', '', '', '', '', '', '']
//
// const isX = function (i) {
//   if (i % 2) {
//     return false
//   } else {
//     return true
//   }
// }
// //
// const updateBox = function (boxIndex) {
//   let turn = 0
//   for (let i = 0; i < gameArray.length - 1; i++) {
//     if (gameArray[i] === 'X' || gameArray[i] === 'O') {
//       turn++
//     }
//   }
//   if (gameArray[boxIndex] === 'X' || gameArray[boxIndex] === 'O') {
//     console.log('choose another space')
//   } else if (isX(turn) === true) {
//     gameArray[boxIndex] = 'X'
//   } else if (isX(turn) === false) {
//     gameArray[boxIndex] = 'O'
//   }
//   console.log(turn)
// }

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
  signOutSuccess,
  gameArray
  // updateBox
}
