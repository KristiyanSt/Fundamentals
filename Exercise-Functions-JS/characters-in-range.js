function charactersInRange(first,second){

let firstCharNum = first.charCodeAt(0);
let secondCharNum = second.charCodeAt(0);

if(firstCharNum>secondCharNum){
    printChars(secondCharNum,firstCharNum);
}
else{
    printChars(firstCharNum,secondCharNum);
}



function printChars(firstCharNum,secondCharNum){
    
    let sequence = [];

    for(let i = firstCharNum + 1; i < secondCharNum; i++){

       let currentChar = String.fromCharCode(i);
       sequence.push(currentChar);

    }

    console.log(sequence.join(' '));
}

}


charactersInRange('a','d');
