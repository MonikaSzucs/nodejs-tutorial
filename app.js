// npm - global command, comes with Node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global depedency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const  _ = require('lodash')

const items = [1,[2,[3,[4]]]]
// use method flattenDeep it will grab everything within an array of arrays and make it just a nice array
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people')

// just run npm install which will isntall all the dependencies listed in package.json
// install dependencies for the rest of the course
// npm i nodemon -D or npm i nodemon --save-dev
// use this while we are creating the app
// In the Package.json write:

//"scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "start": "node app.js"

// this will then allow you to just type npm start instead of node app.js

// To see changes automatically you need to add to package.json:

//"scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "start": "node app.js",
//    "dev": "nodemon app.js"

// when you add nodemon app.js then you are able to type in the terminal 
// npm run dev
// This will automatically update any changes you do as it is running
// nodeman restarts the app


// Uninstall packages
// npm uninstall <packageName>
// example: npm uninstall bootstrap

