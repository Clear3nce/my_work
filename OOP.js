// adding the method in an object.

// const duck={
//     name:'Aflac',
//     numLeg:2,
//     sayName: function(){
//         return "The name of this duck is " + duck.name +"."
//     }
// }
// console.log(duck["name"]);
// console.log(duck.sayName());


// Using This key word
// const duck={
//     name:'Aflac',
//     numLeg:2,
//     sayName: function(){
//         return "The name of this duck is " + this.name +"."
//     }
// }
// console.log(duck["name"]);
// console.log(duck.sayName());
// This keyword refers to the object that the method is associated with.

// constructors are blueprints for objects creation.
// function Bird(){
//     this.name='Albert',
//     this.color='blue',
//     this.numLegs=2
// }
// let blueBird=new Bird();
// console.log(blueBird);
// console.log(blueBird['name'])

// // Extending a constructor to take parameters.
function Bird(name,color){
    this.name=name,
    this.color=color
}
let blueBird= new Bird('chief','blue');
console.log(blueBird);

console.log(blueBird instanceof Bird);
console.log(blueBird.constructor===Bird);
console.log(blueBird.hasOwnProperty('name'));
//  how to add properties to the constructor prototype to reduce duplication.
Bird.prototype.numLegs=2;
console.log(blueBird.numLegs)



