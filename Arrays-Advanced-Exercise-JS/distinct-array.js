function removingRepeatingNumbers(numbers){


for(let i = 0; i<numbers.length; i++){

    for(let j = i+1; j<numbers.length; j++){

        if(numbers[i]===numbers[j]){

            numbers.splice(j,1);
            j--;
            
        }

    }
}
console.log(numbers.join(' '));

}

removingRepeatingNumbers([7, 8, 9, 7, 7, 2, 3, 4, 1, 2]);