'use strict'

const { stripIndents } = require('common-tags')
const { merge } = require('ramda')
const {getOsVersion, getPlatformInfo} = require('./get-os-info')

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

function formErrorText (info) {
  return function onError (error) {
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
