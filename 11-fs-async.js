// methods below in {}
const { readFile, writeFile } = require('fs');

console.log('start');

// If we do not provide the UTF coding then we will get the ebuffer in the console log
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    const first = result;
    // provide a path
    // add a callback ()=>{}
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting the next task')
