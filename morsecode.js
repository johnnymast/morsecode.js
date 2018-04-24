/**
 *
 * @param {string=} string - string to encode or decode
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
 *
 * @param {string=} - The string to encode
 * @throws error
 * @returns {string
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

MorseCode.prototype.flip_array = function (array) {
  return Object.keys(array)                //get the keys as an array
    .filter(array.hasOwnProperty.bind(array)) //safety check (optional)
    .reduce(function (obj, key) {                  //build up new object
      obj[array[key]] = key
      return obj
    }, {})                                       //{} is the starting value of obj
}

/**
 * Decode a morse code string. You can give either the string to this function or
 * the constructor. If not set we will throw an error.
 *
 * @param {string=} - The string to decode
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
    let characters = this.flip_array(this.translation)
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