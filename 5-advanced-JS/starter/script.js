// Inheritance in JS: Prototypes and prototype chains

// Every object has a prototype property, which makes inheritance possible in js
// The prototype property of an object is where we put methods and properties that we want other objects to inherit
// The Constructor's prototype property is NOT the prototype of the Constructor,
// it's the prototype of all instances that are created through it
// When a certain method (or property) is called, the search starts in the object itself,
// and if it cannot be found, the search moves to the object's prototype.
// The search continues until the method is found.
// This is the protoype chain.

// Function constructor

var joanna = {
  name: 'Joanna';
  yearOfBirth: 1986;
  job: 'Panda';
};
