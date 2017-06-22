'use strict'

const { getOsVersion, getPlatformInfo, versionRegex } = require('./get-os-info')
const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot')

/* global describe, it */
describe('get-os-info', () => {
  const macVersion = 'Version: 15.1.1'
  const linuxVersion = 'Version: Ubuntu Linux - 12.04'

  it('gets OS', () =>
    getOsVersion().then(os => la(is.unemptyString(os), 'missing OS', os)))

  it('gets platform information', () =>
    getPlatformInfo().then(info =>
      la(is.unemptyString(info), 'missing platform info', info)
    ))

  it('has version regex', () => la(is.regexp(versionRegex)))

  it('can parse mac version', () => la(versionRegex.test(macVersion)))

  it('can replace mac version', function () {
    snapshot(macVersion.replace(versionRegex, 'a version'))
  })

  it('can parse linux version', () => la(versionRegex.test(linuxVersion)))

  it('can replace linux version', function () {
    snapshot(linuxVersion.replace(versionRegex, 'a version'))
  })
})
