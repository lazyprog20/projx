let animalorig = {pet:"dog", kind: "special"};

function bpAnimal(age, breed){
    let cloneAnimal = {};
    cloneAnimal.age = age;
    cloneAnimal.breed = breed;
    return cloneAnimal;
}

//document.write(`<p>${obj.age} is the age`);

function bpBird(name, age){
    this.name = name;
    this.age = age;
}

//let obj = new Student("name", age);

class bpLand{
    constructor(area, environment){
        this.area = area;
        this.environment = environment;
        alert("Successful!");
    }
}

//same format create obj

// let obj = {
//     name:"name", 
//     action: function(){
//         alert("Do action!");
//     }
// }

function bpAir(waterlevel, cloudlevel){
    this.waterlevel = waterlevel;
    this.cloudlevel = cloudlevel;

    this.flag = (pass) => {
        alert(`The weather is ${this.cloudlevel}`);
    }
}

bpAir.prototype.newflag = (subject) => {
    alert(`Waterlevels are in ${this.waterlevel} extra ${subject}`);
}

//document.write(`<p>${obj.age} is the age`);

bpAir.prototype.color = "white";

//obj.function(pass)

function action1(){
    document.write(`<p>${this.name} is ${this.age} years old</p>`);
}

//action1.call(obj);
//action1.call(bpBird object);

function returnee(){
    return alert(`${this.name} has returned`);
}

function returneePass(food){
    return alert(`${this.name} has returned and ate a ${food}`);
}

//function.apply(obj1,array);
//let obj1 = {name:"name"};
//let obj2 = ["attrib"];

function action2(){
    document.write(`<p>${this.name} is ${this.age} years old again!</p>`);
}

//let variable = action2.bind(obj);
//variable();

class Pet{
    constructor(speed, weight){
        this.speed = speed;
        this.weight = weight;
    }

    action1(petMove){
        document.write(`A pet that has a weight of ${this.weight} can ${petMove}<br>`);

    //Di pede magsabay static at non-static sa constructor
    // static action2(petMove){
    //     document.write(`A pet that has a weight of ${this.weight} can ${petMove}`);
    }

    getSpeed(){
        return this.speed;
    }

    getWeight(){
        return this.weight;
    }
}

//non-static
//obj.action
//obj attrib lalabas

//static
//class.action
//class name lalabas

// feb 21

class bpplant{
    constructor(color, move){
        this.color = color;
        this.move = move;
    }

    action1(water){
        alert(`The plant is color ${this.color} and absorbs ${water} ml of water`);
    }
}

class waterlily extends bpplant{
    constructor(color, move, surface){
        super(color, move);
        this.surface = surface;
    }

    floats(speed){
        alert(`This waterlily has a color of ${this.color} and floats forward at ${speed} kph`);
    }
}

// child can point to parent object
// child = parent

try{

}catch(p){

}finally{
    
}