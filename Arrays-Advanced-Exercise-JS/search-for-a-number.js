function searchingNumber(numbers,commandArgs){

let numbersToTake = commandArgs[0];
let numbersToDelete = commandArgs[1];
let numberToSearch = commandArgs[2];

let takenNumbers = numbers.slice(0,numbersToTake);
takenNumbers.splice(0,numbersToDelete);

let count = takenNumbers.filter(n => n === numberToSearch).length;
console.log(`Number ${numberToSearch} occurs ${count} times.`);
}

searchingNumber([5, 2, 3, 3, 1, 6],
    [5, 2, 3]
    );