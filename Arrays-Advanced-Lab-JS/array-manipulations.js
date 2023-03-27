function manipulatingArray(input){

let numbers = input[0].split(' ')
                      .map(n=>Number(n));

function addingNumber(number){

numbers.push(number);

}

function removingNumber(number){

numbers = numbers.filter(n=>n!==number);
console.log(numbers);
}

function removingIndex(index){

numbers.splice(index,1);

}
function insertingNumber(number,index){

numbers.splice(index,0,number);

}

for(let i = 1;i<input.length;i++){

    let command = input[i].split(' ');
    let operation = command[0];

    if(operation == 'Add'){

        let number = command[1];
        addingNumber(Number(number));

    }
    else if(operation =='Remove'){

        let number = command[1];
        removingNumber(Number(number));

    }
    else if(operation == 'RemoveAt'){

        let index = command[1];
        removingIndex(Number(index));

    }
    else if(operation == 'Insert'){
        let number = command[1];
        let index = command[2];

        insertingNumber(Number(number),Number(index));

    }
}

console.log(numbers.join(' '));

}

manipulatingArray(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);