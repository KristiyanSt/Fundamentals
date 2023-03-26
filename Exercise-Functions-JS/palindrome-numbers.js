function palindromeNumbers(numbers){

palindromeCheck(numbers);

 function palindromeCheck(numbers){
 
    for(let number of numbers){

        let numberString = number.toString();
        let numberStringLength = numberString.length;
        let isEqual = true;

        for(let i = 0; i<numberString.length/2 ;i++){

        let frontDigit = numberString[i];
        let backDigit = numberString[numberStringLength - 1 - i];
        
        if(frontDigit !== backDigit){
           isEqual = false;
        }

        }

        if(isEqual){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }

 }



}

palindromeNumbers([32,2,232,1010]);