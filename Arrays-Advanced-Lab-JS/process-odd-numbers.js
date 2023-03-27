function processOddNumbers(numbers){
let processedNumbers = numbers.filter((x,i)=>i % 2 !=0)
                              .map(x=>x*2)
                              .reverse();

                              

console.log(processedNumbers.join(' '));

}

processOddNumbers([3, 0, 10, 4, 7, 3]);
