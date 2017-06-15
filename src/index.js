'use strict'

const { stripIndents } = require('common-tags')
const { merge } = require('ramda')
const {getOsVersion, getPlatformInfo} = require('./get-os-info')
const la = require('lazy-ass')
const is = require('check-more-types')

function addPlatformInformation (info) {
  return getPlatformInfo()
  .then((platform) => merge(info, { platform }))
}

function formError (info, error) {
  return addPlatformInformation(info)
  .then((info) => merge(info, { message: error.message, stack: error.stack }))
}

const utils = {
  formError,
  getOsVersion,
  getPlatformInfo
}

const isInfo = is.schema({
  description: is.unemptyString,
  solution: is.unemptyString,
  printStack: is.maybe.bool
})

function formErrorText (info) {
  la(isInfo(info), 'invalid info object', info)

  return function onError (error) {
    la(is.error(error), 'expected error object', error)

    const hr = '----------'
    return formError(info, error)
    .then((extended) => stripIndents`
      ${hr}
      ${info.description}
      ${info.solution}
      ${hr}

      ${extended.message}
      ${info.printStack ? extended.stack : ''}
      ${hr}
      ${extended.platform}
    `)
  }
}

module.exports = {
  utils,
  formErrorText
}
