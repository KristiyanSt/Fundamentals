function negativeOrPositiveNumbers(numbersAsStrings){

let numbersArr = [];
let numbersAsStringsLength = numbersAsStrings.length;

for(let i = 0; i< numbersAsStringsLength;i++){

    let currentDigit = Number(numbersAsStrings[i]);

    if(currentDigit>=0){
        numbersArr.push(currentDigit);
    }
    else{
        numbersArr.unshift(currentDigit);
    }
}

console.log(numbersArr.join('\n'));

}

negativeOrPositiveNumbers(['3', '-2', '0', '-1']);