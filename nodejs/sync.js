const fs = require('fs');

// console.log('A');
// const result = fs.readFileSync('nodejs/sample.txt', 'utf-8');
// console.log(result);
// console.log('C');

console.log('A');
fs.readFile('nodejs/sample.txt', 'utf-8', (err, result)=>{
    console.log(result);
});
console.log('C');