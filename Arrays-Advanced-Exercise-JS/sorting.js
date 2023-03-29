function sorting(numbers) {

    let sortedNumbers = [];
    numbers = numbers.sort((a, b) => a - b);
    let length = Math.trunc(numbers.length / 2);

    for (let i = 0; i < length; i++) {

        let lastNumberIndex = numbers.length - 1 - i;

        sortedNumbers.push(numbers[lastNumberIndex]);
        sortedNumbers.push(numbers[i]);

        if(i=== length-1 && (numbers.length % 2) !== 0){
            sortedNumbers.push(numbers[i+1]);
        }

    }

    console.log(sortedNumbers.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94 ]);