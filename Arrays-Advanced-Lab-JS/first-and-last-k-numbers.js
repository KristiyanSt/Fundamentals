function firstAndLastKNumbers(numbers){

let numberK = numbers.shift();

let firstKNumbers = numbers.slice(0,numberK);
let lastKNumbers = numbers.slice(numbers.length-numberK,);

console.log(firstKNumbers.join(' '));
console.log(lastKNumbers.join(' '));
}

firstAndLastKNumbers([3,6, 7, 8, 9]);