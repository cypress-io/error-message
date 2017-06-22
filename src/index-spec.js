'use strict'

const { formErrorText } = require('.')
const { platformRegex, versionRegex } = require('./get-os-info')
const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot')

/* global describe, it */
describe('formErrorText', () => {
  const info = {
    description: 'error description',
    solution: 'our solution'
  }
  const error = new Error('exception message')

  const normalizePlatform = text =>
    text.replace(platformRegex, 'Platform: name')
  const normalizeVersion = text => text.replace(versionRegex, 'Version: number')

  it('is a function', () => {
    la(is.fn(formErrorText))
  })

  it('is a unary function', () => {
    la(formErrorText.length === 1)
  })

  it('has platform name string', () =>
    formErrorText(info)(error).then(text => la(platformRegex.test(text), text)))

  it('has version string', () =>
    formErrorText(info)(error).then(text => la(versionRegex.test(text), text)))

  it('forms full error message', () =>
    snapshot(
      formErrorText(info)(error).then(normalizePlatform).then(normalizeVersion)
    ))

  describe('throws an error if', () => {
    it('error is missing', () => {
      la(is.raises(() => formErrorText(info)()))
    })

    it('error is not an exception', () => {
      la(is.raises(() => formErrorText(info)('a problem')))
    })

    it('info is missing description', () => {
      la(is.raises(() => formErrorText({ solution: 'do something' })))
    })

    it('info is missing solution', () => {
      la(is.raises(() => formErrorText({ description: 'hmm' })))
    })
  })
})
