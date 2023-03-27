function sumFirstAndLast(numbersAsStrings){

let firstNum = Number(numbersAsStrings.shift());
let lastNum = Number(numbersAsStrings.pop());

let sum = firstNum + lastNum;

console.log(sum);

}

sumFirstAndLast(['20', '30', '40']);