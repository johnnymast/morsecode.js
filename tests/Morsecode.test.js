const MorseCode = require('../morsecode')

describe('Encode', function() {
  let morse = new MorseCode()
  it('sos should encode "sos" to ... --- ...', () => {
    expect(morse.encode('sos')).toBe('... --- ...');
  });
  it('i cant lie i love beer should encode to .. / -.-. .- -. - / .-.. .. . / .. / .-.. --- ...- . / -... . . .-.', () => {
    expect(morse.encode('i cant lie i love beer')).toBe('.. / -.-. .- -. - / .-.. .. . / .. / .-.. --- ...- . / -... . . .-.');
  })
  it('An empty value to the constructor and no value to encode should throw an error', () => {
    expect(function() {
      morse.encode()
    }).toThrow ('There is no value to encode, please lookup the api for encoding a string.');
  });
  it('An empty empty string to encode to throw an error.', () => {
    expect(function() {
      morse.encode('')
    }).toThrow ('There is no value to encode, please lookup the api for encoding a string.');
  });
});

describe('Decode', () => {
  let morse = new MorseCode()
  it('"... --- ..." should decode to sos', () => {
    expect(morse.decode('... --- ...')).toBe('sos');
  });
  it('".. / -.-. .- -. - / .-.. .. . / .. / .-.. --- ...- . / -... . . .-." should decode to i cant lie i love beer', () => {
    expect(morse.decode('.. / -.-. .- -. - / .-.. .. . / .. / .-.. --- ...- . / -... . . .-.')).toBe('i cant lie i love beer');
  });
  it('An empty value to the constructor and no value to decode should throw an error', () => {
    expect(function() {
      morse.decode()
    }).toThrow ('There is no value to decode, please lookup the api for decoding a string.');
  });
  it('An empty empty string to decode to throw an error.', () => {
    expect(function() {
      morse.decode('')
    }).toThrow ('There is no value to decode, please lookup the api for decoding a string.');
  });
});