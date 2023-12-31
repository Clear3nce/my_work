// creating objectts/ building js objects.
// objects are similar to arrays but they use properties to access and modify their data.

const cat ={
    'name':"Whiskers",
    'legs':4,
    'tails':1,
    'enemies':['dogs','water']
};
console.log(cat.name)
console.log(cat.legs)
console.log(cat.enemies)

const myDog ={
    'name':'faku',
    legs:2,
    tails:1,
    friends:[['kweto','dzinga'],['piter','jonny']]
};
console.log(myDog.name,myDog.legs,myDog.tails,myDog.friends)

// accessing object properties using using bracket notation when the property of an object has space in its name.

console.log(myDog['legs'])
console.log(myDog['tails'])
console.log(myDog['friends'])

// Accessing Objects Properties with variables.
const user={
    name:"John",
    age:25,
};

const p="name";
const p1=user[p];
console.log(p1)

// How to update object properties.
user.name="denny the dog"
console.log(user.name);
user['age']=28;
console.log(user.age);

// how to add new properties to a js Object.
user.height='5 metter';


const H="height";
const HV=user[H];
console.log(HV);

// How to delete properties from js Object.

delete user.age;
// checking if it actually worked.
console.log(user.age); // this should throw an undefined.
// console.log(x);// x is not defined.
// You can also use bracket notation to delete properties.


// Using Objects for lookups.


// testing objets for properties



