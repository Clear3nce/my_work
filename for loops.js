
// for loop
// reverse using unshift built-in function 
arrayz=[1,2,3,4,5,6,7];
reversed=[];

for(let i=0;i<arrayz.length; i++){
    console.log(arrayz[i]);
    reversed.unshift(arrayz[i]);

};
console.log(reversed);

// understanding how forEach and for of works in arrays and strings.
// forEach uses call back functions, takes a function as a parameter.
const myArray=['a','b','c'];
const messege="clearence";

myArray.forEach(letter =>console.log(letter));

for (let letters of myArray){
    console.log(letters)
}
const emp=[];
for(let str of messege){
    emp.unshift(str);
};
console.log(emp.reverse())





