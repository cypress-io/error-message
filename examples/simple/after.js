const {formErrorText} = require('../..')
// we expect the following error
const fileReadError = {
  description: 'Failed to read settings file',
  solution: `
    Please create file "important.json" with settings first,
    then run the program again.

    See more info at https://faq.company.com/setup
  `
}

const fs = require('fs')
function foo () {
  try {
    fs.readFileSync('./important.json', 'utf8')
  } catch (err) {
    formErrorText(fileReadError)(err).then(console.error)
  }
}
foo()
