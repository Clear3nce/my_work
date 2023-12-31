// Ternary Operator.

function drink(age){
    return age<10? 'you can have tea':'you are too old for tea get a beer.';
}
const x=drink(18);
console.log(`${x}`);


// multiple ternary operator.
function bigNumber(...numbers){
    return numbers[3]>10?'maximum value of the array is larger than 10': 'is less'

}
const answer=bigNumber(5,6,8,2);
console.log(`${answer}`)


// switch statement.
fruit ='apple';
switch ('appllle'){
    case 'apple':
       console.log( 'The fruit is an apple.');
        break;

    case 'orange':
        console.log('The fruit is an orange.');
        break;
    case 'banana':
        console.log('The fruit is banana.');
        break;
    default:
        console.log('i do not know this fruit.');
}




