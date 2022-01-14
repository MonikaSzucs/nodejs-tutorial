// terminal run the: node 2-globals.js

// GLOBALS - NO WINDOW !!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

// Run the file by typing:
// node app
// node app.js

console.log(__dirname)
console.log(__filename)

setInterval(()=>{
    console.log('hello world')
}, 1000)