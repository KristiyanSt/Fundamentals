function lastKNumbers(lengthOfSequence,previousElementsCount){

let sequence = [1];

let sum = function getSumOfPreviousNumbers(sequence,index){
 
    let sumOfPreviousNumbers = 0;
    let startIndex = index - previousElementsCount;

    if(startIndex<0){
        startIndex = 0;
    }

    for(let i = startIndex; i<sequence.length ;i++){

        let currentDigit = sequence[i];
        sumOfPreviousNumbers+= currentDigit;
       
    }
    return sumOfPreviousNumbers;
}

for(let i = 1; i<lengthOfSequence; i++){

    sequence.push(sum(sequence,i));

}

console.log(sequence.join(' '));

}

lastKNumbers(6, 3);

// 0 1 2 3 4 5   
// 4 5 3 6 8 