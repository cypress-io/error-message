'use strict'

const os = require('os')
const { stripIndent } = require('common-tags')
const pify = require('pify')
const getos = pify(require('getos'))

function formatOSVersion (osInfo) {
  return [osInfo.dist, osInfo.release].join(' - ')
}

function getOsVersion () {
  if (os.platform() === 'linux') {
    return getos()
    .then(formatOSVersion)
    .catch(() => os.release())
  } else {
    return Promise.resolve(os.release())
  }
}

function getPlatformInfo () {
  return getOsVersion()
  .then((version) => stripIndent`
    Platform: ${os.platform()}
    Version: ${version}
  `)
}

const platformRegex = /Platform: \w+/
const versionRegex = /Version: [\w.]+/

module.exports = {
  getOsVersion,
  getPlatformInfo,
  platformRegex,
  versionRegex
}
