// Object Oriented Programming
// To Structure our code
// Prototypes
// New Operator
// Constructor
// Classes
// Keywords(extends,super);

// Object Prototypes
// Prototypes are the mechanism by which javascript objects inherit features form one another
// It is like a single template object that all objects inherit methods
// and properties from without having their own copy.

// arr.__proto__(reference)
// Array.prototype(actual object)
//String.prototype 

// Every Object in javascript has a built-in property which is 
// called its prototypes. The prototypes is itself an object, so 
// the prototype will have its own prototype, making what's
// called a prototype chain. The chain ends when we reach 
// prototpye that has null for its own prototype.


let arr=[1,2,3];
let arr1=[1,2,3];
//arrays is an object where 0 key 1 and 1 key 2 and 2 key is 3
// if we log the array then we see prototype we see the different functions
arr.__proto__.push=(n)=>console.log(n);
arr.push(3);
console.log(Array.prototype);
console.log(String.prototype);


arr.sayHello=()=>{
    return 1;
}
arr1.sayHello=()=>{
    return 1;
}
console.log(arr.sayHello());
console.log(arr1.sayHello());

if(arr.sayHello()===arr1.sayHello()){
    console.log(true);
}





/////////////Factory Function ///////////////////////
// A function that create objects and every function talk
//  create their own copy for every object that is their
//  drawback

// function Personmaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1=Personmaker('Hamza',25);

// p1.talk();



//////////////////New Operator////////////////////
// The new operator lets developers create an instance of a
// user-defined object type or of one of the built-in object
// types that has a constructor function.

// Constructor does not return anything and start with capital letter


function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.talk=function(){
    console.log(`My name is ${this.name}`);
    console.log(this);
}

let p1=new Person('Hamza',25);
let p2=new Person('Hamza',25);


// p1.talk();


///////////////////// classes ////////////////////

// Classes are a template for creating objects.

// THe constructor method is a special method of a class
// for creating and initializing an object instance of 
// that class

class Person1{  //base class 
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}

let p3=new Person1('Hamza',25);
let p4=new Person1('Adeel',22);



////////////////Inheritance///////////////
// Inheritance is a mechanism that allows us to create
// new classes on the basis of already existing classes.


class Student extends Person1{  //extends keyword is use to inherit the child class with parent

    constructor(marks){
        super(name,age);//Parent class constructor is being called
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

let s1=new Student('Hamza',25,95);


 class Teacher{
    constructor(subject){

    }
 }