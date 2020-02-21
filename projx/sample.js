function sfunction(){
    var v1 = prompt("Input words: ");
    document.getElementById("here").innerHTML = v1;
}

function distitle(){
    var t1 = document.getElementById("title").innerHTML;
    if(t1 == "Hello World"){
        document.getElementById("title").innerHTML = "Bye World";
    }else{
        document.getElementById("title").innerHTML = "Hello World";
    }
}

function disbutton(){
    var var2 = prompt("input words: ");
    document.getElementById("button").innerHTML = var2;
}

let name = "bimby";
console.log(typeof name);