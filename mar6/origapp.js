const fansign = require("fs");

fansign.readFile("../mar5/here.txt","utf8",function(error, content){
    if(error){
        console.log("Wow error");
    }else{
        console.log(`${content} is the content`);
    }
})

try{
    let a = fansign.readFileSync("../mar5/here.txt","utf8");
    console.log(a);
}catch(mayMali){
    console.log("error magload...");
}

const proseso = require("process");

console.log(proseso.env.PORT);

const daan = require("path");

console.log(daan.extname("../mar5/here.txt"))