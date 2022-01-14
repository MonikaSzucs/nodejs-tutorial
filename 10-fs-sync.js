const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// Other way to access methods
//const fs = require('fs');
//fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// It will overwrite the files that are already there if you run this
// we passed in arguments below
// we will add a third property name called flag
// the 'a' stands for append
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');

// If it takes too long to load then the application will be down