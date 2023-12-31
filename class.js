// class constructor vs function constructor.

//  constructor Class.
class Person {
    constructor(details){
        this.name=details.name;
        this.age=details.age;
        this.numLegs=details.numLegs;
    }
    // no need for defining a function with the key word "function"
    hello(){
        return `hello ${this.name}, are you ${this.age} years old? `
    }
}
const person= new Person({
    name:'Bob',
    age:25,
    numLegs:2
});
console.log(person.hello());
// on the above code we pass the object properties in the class.
// details parameter is an object that contains the information needed to initialize the attributes of a Person objects.
// its a way to pass multiple values in the constructor in a structured manner.


class Animal{
    constructor(species){
        this.species=species;
    }
    hi(){
        return "hey there nigga";
    }
}

class Dog extends Animal {
    constructor(info){
        super('canine');
        this.breed=info.breed;
        this.name=info.name;
        this.age=info.age;
    }

    helloo(){
        return `my name is ${this.name} and I am ${this.age} years old. I fall under ${this.breed} breed.`
    }
}
const myDog= new Dog({
    breed:'canine',
    name:"clearence",
    age:25
});
console.log(myDog.species);
console.log(myDog.hi());
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
console.log(myDog.constructor===Animal);
console.log(myDog.constructor===Dog);

console.log(myDog.breed,myDog.species);
console.log(myDog.helloo());

