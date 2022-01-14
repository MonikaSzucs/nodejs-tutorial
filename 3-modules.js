// terminal run the: node 3-modules.js

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')

const {john, peter} = require('./4-names')

const data = require('./6-alternative-flavor')
console.log(data)

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(john)
sayHi(peter)