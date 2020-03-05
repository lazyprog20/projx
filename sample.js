console.log("its an object inside a window object");

//sample.js -->error
//node sample.js

//window object bawal json
//global pede

//to do repl, type node in cmd

//console.log(__dirname);
//console.log(__filename);

//async or non-blocking I/O
setTimeout(() => {
    console.log("inside sync...");
}, 5000);

console.log("this is the last command");

//const fs = require("fs");
//const files = fs.readdirSync("./");
//returns content of file
//./ means present working directory

//fs.readdir("./", function(error, files)){
//     if(error){
//         console.log("error has occured...");
//     }else{
//         console.log(files);
//     }
// }

//fs.readdir("./asdasd", function(error, files)){
//     if(error){
//         console.log("error has occured...");
//     }else{
//         console.log(files);
//     }
// }
//error has occured

//const os = require("os");

// let totalMem = os.totalMem();
// let freeMem = os.freeMem();
// let usedMem = os.usedMem();
//console.log(`${usedMem} bytes out of ${totalMem} bytes is being used`);
//console.log(`${freeMem} bytes is presently available`);

//const pi 3.1416;
//let add = (num1, num2) => num1+num2;
//let sub = (num1, num2) => num1-num2;
//let multi = (num1, num2) => num1*num2;
//let divide = (num1, num2) => num1/num2;

//module.exports.suggestedName0 = pi;
//module.exports.suggestedName1 = add;
//module.exports.suggestedName2 = sub;
//module.exports.suggestedName3 = multi;
//module.exports.suggestedName4 = divide;

//module.exports = add; means function ang kinukuha

//module.exports = {
//   nameKey0: pi, 
//   nameKey1: add,
//   nameKey2: sub,
//   nameKey3: multi,
//   nameKey4: divide   
// };