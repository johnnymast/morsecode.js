[![CircleCI](https://circleci.com/gh/johnnymast/morsecode.js.svg?style=svg)](https://circleci.com/gh/johnnymast/morsecode.js)

# morsecode.js

This package is a really easy one .. It will help to to encode or decode secret morsecode messages.

## Usage

Morsecode.js is easy to use.

### Node

Just require je morsecode.js library and you will be ready to go.

```javascript
const MorseCode = require('./morsecode')

let morse = new MorseCode()
console.log(morse.encode('sos'));
```

Output: 

```javascript
... --- ...
```

## Requirements

The following versions of Node are supported by this version.

+ NodeJS 6+

## Author

This package is created and maintained by [Johnny Mast](https://github.com/johnnymast).

## License

The MIT License (MIT)

Copyright (c) 2019 Johnny Mast

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
