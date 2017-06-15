# @cypress/cypress-terminal-error-render

> Uniform error display in the terminal

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save @cypress/cypress-terminal-error-render
```

## Use

Think about all possible errors your application might encounter.
Describe each one and suggest a solution the user should try in case this
particular error happens. Then form the full message once the exception
is caught and show it to the user

```js
const fileSaveError = {
  description: 'We could not save an important file',
  solution: `Please check folder permissions and try again

    more details on our FAQ page: https://faq.company.name
  `
}
fs.writeFile(name)
  .catch(formErrorText(info))
  .then(console.error)
/*
  shows nice error message

  ------
  We could not save an important file
  Please check folder permissions and try again

    more details on our FAQ page: https://faq.company.name

  Exception message
  ------
  Platform: darwin
  Version: 15.6.2
*/
```

If you want to include the exception stack, pass `printStack` option in
the `info` object. For example, a catch-all function should probably print
stack to give you a good idea where the problem happens.

```js
const badError = {
  description: 'Unexpected error happened',
  solution: `Something terrible went wrong. Search issues on our
    GitHub repo to find possible solution: https://github.com/company/repo`,
  printStack: true
}
doMyStuff()
  .catch(formErrorText(badError))
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/cypress-io/cypress-terminal-error-render/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/@cypress/cypress-terminal-error-render.svg?downloads=true
[npm-url]: https://npmjs.org/package/@cypress/cypress-terminal-error-render
[ci-image]: https://travis-ci.org/cypress-io/cypress-terminal-error-render.svg?branch=master
[ci-url]: https://travis-ci.org/cypress-io/cypress-terminal-error-render
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
