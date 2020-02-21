let a = {color:"Blue",weight:"light"};
let b = {age:20,type:"dog"};

function func1(type,age){
    this.type = type;
    this.age = age;
}

let animal1 = new func1("cat",18);

func1.prototype.displayAnimal = function(){
    document.write(`${this.type} is the type and has an age of ${this.age}`);
}

func1.prototype.type = "cow";

document.write(`${animal1.type} is the type and has an age of ${animal1.age}`);

let table1 = {height:5,width:6};

let func2 = function(){
    document.write(`<br>Parameters: ${this.height}, ${this.width}`);
}

func2.call(table1);

let func3 = function(height,width){
    document.write(`<br>Parameters: ${this.height}, ${this.width}`);
}

let arr1 = [3,4,5];

func3.apply(table1,arr1);

