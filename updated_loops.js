
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


// while loops and do while loops.

let x=0; //initialization

while (x<10){  // condition 
    console.log(x); // block- the body.
    x+=1;      // updated index.
}

let i=0; //initialization

while (i<10){  // condition
      
    console.log(i); // block- the body.
    i+=1;
    if (i>2) break;
        
}

// combining two arrays.
function combine(array1, array2) {
    const combinedArray = [];

    while (array1.length > 0 || array2.length > 0) {
        if (array1.length > 0) {
            combinedArray.push(array1.shift());
        }
        if (array2.length > 0) {
            combinedArray.push(array2.shift());
        }
    }

    return combinedArray;
}
const y=combine([1,2,3,4,5],[6,7,8,9,10]);
console.log(y);
const b=combine([1,2,3,4,5,77],[6,7,8,9,10]);
console.log(b);
const c=combine([1,2,3,4,5],[6,7,8,9,10,223]);
console.log(c);





