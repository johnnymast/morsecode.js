const MorseCode = require('./morsecode')

let morse = new MorseCode()
console.log(morse.encode('sos'));
console.log(morse.decode('... --- ...'));