function manipulatingArray(numbers,commands){

    for(let i = 0; i<commands.length; i++){

        let commandArgs = commands[i].split(' ');
        let operation = commandArgs.shift();

        if(operation === 'add'){
            let index = Number(commandArgs[0]);
            let number = Number(commandArgs[1]);
            numbers.splice(index,0,number);
        }
        else if(operation === 'addMany'){
            let index = Number(commandArgs.shift());
            numbers.splice(index,0,...commandArgs.map(Number));
        }
        else if(operation === 'contains'){
            let number = Number(commandArgs[0]);
            let index = numbers.indexOf(number);
            console.log(index);
        }
        else if(operation === 'remove'){
            let index = Number(commandArgs[0]);
            numbers.splice(index,1);
        }
        else if(operation === 'shift'){
            let count = Number(commandArgs[0]);
            for(let i = 1; i<=count; i++){
                let currentNumber = numbers.shift();
                numbers.push(currentNumber);
            }
        }
        else if(operation === 'sumPairs'){
            let copiedArray = [];

            for(let i = 0;i<numbers.length; i+=2){
                if(i===numbers.length-1){
                    copiedArray.push(numbers[i]);
                }
                else{
                    let currentSum = numbers[i] + numbers[i+1];
                    copiedArray.push(currentSum);
                }
            }
            numbers = copiedArray;
        }
        else if(operation === 'print'){
            console.log(`[ ${numbers.join(', ')} ]`);
        }
    }
}

manipulatingArray([],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    
    
    );