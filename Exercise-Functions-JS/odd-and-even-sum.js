function oddAndEvenSum(number){

let numberString = number.toString();

let evenSum = 0;
let oddSum = 0;

for(let i = 0; i<numberString.length;i++){

    let currentDigit = Number(numberString[i]);
    if(currentDigit % 2 === 0){
        evenSum+= currentDigit;
    }
    else{
        oddSum+= currentDigit;
    }

}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


}

oddAndEvenSum(1000435);