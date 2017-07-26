const fs = require('fs')
function foo () {
  fs.readFileSync('./important.json', 'utf8')
}
foo()
