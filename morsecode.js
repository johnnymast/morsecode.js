/**
 *
 * @param {string} string - string to encode or decode
 * @constructor
 */
let MorseCode = function (string = '') {
  this.translation = {
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '!': '-.-.--',
    '-': '-....-',
    '/': '-..-.',
    '@': '.--.-.',
    '(': '-.--.',
    ')': '-.--.-',
    ' ': '/'
  }

  this.string = string
}

/**
 * Encode a morse code string. You can give either the string to this function or
 * the constructor. If not set we will throw an error.
 * @param {string} string - The string to encode
 * @throws error
 * @returns {string}
 */
MorseCode.prototype.encode = function (string = '', result = '') {
  if (string.length === 0) {
    if (this.string.length > 0) {
      return this.encode(this.string)
    } else {
      throw ('There is no value to encode, please lookup the api for encoding a string.')
    }
  }

  if (string.length > 0) {
    let characters = string.split('')
    for (let i = 0; i < characters.length; i++) {
      let char = characters[i]
      if (this.translation[char]) {
        result += ' ' + this.translation[char]
      }
    }
  } else {
    throw ('There is no value to encode, please lookup the api for encoding a string.')
  }
  return result.trim()
}

/**
 * Flip the keys and values of an array.
 * @param {array} source - the array to flip.
 * @param {array} {target=[]} - The new array to write the result to.
 * @returns {Array}
 */
MorseCode.prototype.flip = function (source, target = []) {
  Object.keys(source).map((key) => {
    let value = source[key]
    target[value] = key
  })
  return target
}

/**
 * Decode a morse code string. You can give either the string to this function or
 * the constructor. If not set we will throw an error.
 * @param {string} string - The string to decode
 * @throws error
 * @returns {string}
 */
MorseCode.prototype.decode = function (string = '', result = '') {
  if (string.length === 0) {
    if (this.string.length > 0) {
      return this.decode(this.string)
    } else {
      throw 'There is no value to decode, please lookup the api for decoding a string.'
    }
  }

  if (string.length > 0) {
    let characters = this.flip(this.translation)
    let split = string.split(' ')
    for (let i = 0; i < split.length; i++) {
      let char = split[i]
      if (characters[char]) {
        result += characters[char]
      }
    }

  } else {
    throw 'There is no value to decode, please lookup the api for decoding a string.'
  }
  return result
}

module.exports = MorseCode