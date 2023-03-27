function printSmallestTwoNumbers(numbers){

 let smallestNumbers = numbers.sort((a,b)=>a-b)
                              .filter((a,i)=>i<2);

 console.log(smallestNumbers.join(' '));
}

printSmallestTwoNumbers([30, 15, 50, 5]);