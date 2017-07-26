const fs = require('fs')
function foo() {
  fs.readFileSync('./non-existent.json', 'utf8')
}
foo()
