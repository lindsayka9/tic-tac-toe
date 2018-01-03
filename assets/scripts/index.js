'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const gameboard = require('./gameboard')
const signingIn = require('./sign-in')
const signingUp = require('./sign-up')
const user = require('./user-profile')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  gameboard.events.addHandlers()
  signingIn.events.addHandlers()
  signingUp.events.addHandlers()
  user.events.addHandlers()
  events.addHandlers()
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// let gameArray = []
// use require without a reference to ensure a file is bundled
// require('./example')
