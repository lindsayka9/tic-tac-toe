'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const gameEvents = require('./gameboard/events')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  gameEvents.addHandlers()
  authEvents.addHandlers()
  events.addHandlers()
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// let gameArray = []
// use require without a reference to ensure a file is bundled
// require('./example')
