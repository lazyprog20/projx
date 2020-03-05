// const calculator = require("./sample");

// //pede ./sample.js

// console.log(calculator.pi);
// console.log(calculator.add(4,5));

//sa cmd, node app.js or app

//const cal = require("./calc");
//isang function lng ang pede itawag
//console.log(cal(4,5));

// const fs = require('fs');

// fs.readFile("./here,txt", "utf8" ,function(error, data){
//     if(error){
//         console.log("error has occurred...");
//     }else{
//         console.log(data);
//     }
// })

try {
    let data = fs.readFileSync("./here.txt", "utf8");
}catch(error){

}