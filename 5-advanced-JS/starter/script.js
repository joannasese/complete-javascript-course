// // LECTURE 61: Inheritance in JS: Prototypes and prototype chains
//
// // Every object has a prototype property, which makes inheritance possible in js
// // The prototype property of an object is where we put methods and properties that we want other objects to inherit
// // The Constructor's prototype property is NOT the prototype of the Constructor,
// // it's the prototype of all instances that are created through it
// // When a certain method (or property) is called, the search starts in the object itself,
// // and if it cannot be found, the search moves to the object's prototype.
// // The search continues until the method is found.
// // This is the protoype chain.
//
// // Function constructor
//
// // var joanna = {
// //   name: 'Joanna';
// //   yearOfBirth: 1986;
// //   job: 'Panda';
// // };
//
// // function constructors being with capital letter
// var Person = function(name, yearOfBirth, job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   // this.calculateAge = function() {
//   //   console.log(2018-this.yearOfBirth);
//   // }
// };
//
// // prototype property allows for
// // method is not in constructor but can still be used
// // bc it's in the prototype property of the function constructor
// Person.prototype.calculateAge =
// function() {
//   console.log(2018-this.yearOfBirth);
// }
// Person.prototype.lastName = 'Jambalaya';
// // use function constructor to create object
// // called 'instantiation'
// // 1. first, new operator creates an empty object
// // 2. function is called
// var joanna = new Person('Joanna', 1986, 'panda');
// var lucy = new Person('Lucy', 1678, 'dead');
// var kim = new Person('Kim', 1243, 'ancient');
//
// joanna.calculateAge();
// lucy.calculateAge();
// kim.calculateAge();
// console.log(joanna.lastName);

// LECTURE 63: Creating Objects with object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018-this.yearOfBirth)
  }
};

var joanna = Object.create(personProto);
joanna.name = 'Joanna';
joanna.yearOfBirth = 1986;
joanna.job = 'panda';

var jim = Object.create(personProto,
{
  name: {value: 'Jim'},
  yearOfBirth: {value: 1374},
  job: {value: 'designer'}
});
*/

// PRIMITIVES VS OBJECTS
// numbers, strings, booleans, undefined, and null are primitives
// everything else are objects
// primitives hold data in the variable itself

// primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23

// objects
var obj1 = {
  name: 'Joanna',
  age: 32
};
var obj2 = obj1;
obj1.age = 43;
console.log(obj1.age); //43
console.log(obj2.age); //43

// functions
var age = 27;
var obj = {
  name: 'Mikel',
  city: 'Beirut'
};

function change(a,b) {
  a = 30;
  b.city = 'Marrakesh';
}

change(age, obj);
console.log(age); //27
console.log(obj.city); //Marrakesh
// primitive remains unchanged
// object changes

// LECTURE 65: First Class Functions
var years = [1864, 1783, 1874, 1287, 2015];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (let i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// callback function
function calculateAge(el){
  return 2018-el;
}

function legalAge(el){
  return el >= 21;
}

var ages = arrayCalc(years, calculateAge);
// note that we don't call the function here, we just pass in the function variable
// because we want the function to run later on
var legalAges = arrayCalc(ages, legalAge);
console.log(ages);
console.log(legalAges);

// LECTURE 66: Functions Returning Functions
function interviewQuestion(job){
  if (job === 'designer'){
    // return anonymous function
    return function(name){
      console.log(`${name}, what is UX?`);
    }
  } else if (job === 'teacher'){
    return function(name){
      console.log(`${name}, what subject do you teach?`);
    }
  } else {
    return function(name){
      console.log(`${name}, what do you do?`);
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
console.log(teacherQuestion('Jim'));

var designerQuestion = interviewQuestion('designer');
console.log(designerQuestion('Judy'));

interviewQuestion('teacher')('Natalie');

// LECTURE 67: Immediately invoked function expressions (IIFE)
function game(){
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// iife
(function (){
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// LECTURE 68: Closures
