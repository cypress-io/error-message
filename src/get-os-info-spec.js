'use strict'

const {getOsVersion, getPlatformInfo} = require('./get-os-info')
const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('get-os-info', () => {
  it('gets OS', () =>
    getOsVersion()
      .then(os =>
        la(is.unemptyString(os), 'missing OS', os)
      )
  )

  it('gets platform information', () =>
    getPlatformInfo()
      .then(info =>
        la(is.unemptyString(info), 'missing platform info', info)
      )
  )
})
