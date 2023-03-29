function detonatingBomb(numbers,bombArgs){
    let bombNumber = bombArgs[0];
    let power = bombArgs[1];

    while(numbers.includes(bombNumber)){
        let indexOfBomb = numbers.indexOf(bombNumber);
        let startIndex = indexOfBomb - power;
        if(startIndex<0){
            startIndex = 0;
        }
        
        let count = power*2 + 1;

        if(startIndex + count >numbers.length){
            count = numbers.length;
        }

        numbers.splice(startIndex,count);

    }

    console.log(numbers.reduce((a,b) => a + b, 0));
}

detonatingBomb([2,1,1,1,2],
    [2, 1]);

