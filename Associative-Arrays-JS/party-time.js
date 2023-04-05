function printingGuests(input){
let regularGuests = new Map();
let vipGuests = new Map();
for (let i = 0;i<input.length;i++) {
    let currentLine = input[i];
    if(currentLine === 'PARTY'){
        for(let j = i+1;j<input.length;j++){
            let currentGuest = input[j];
            if(vipGuests.has(currentGuest)){
                vipGuests.delete(currentGuest);
            }
            else if(regularGuests.has(currentGuest)){
                regularGuests.delete(currentGuest);
            }
        }
        break;
    }else{
        let charCodeZero = "0".charCodeAt(0);
        let charCodeNine = "9".charCodeAt(0);
        let firstChar = currentLine[0].charCodeAt(0);
        if(firstChar>=charCodeZero && firstChar <=charCodeNine){
            vipGuests.set(currentLine,0);
        }
        else{
            regularGuests.set(currentLine,0);
        }  
    }
}
let sumOfAbsentGuests = vipGuests.size + regularGuests.size;
console.log(sumOfAbsentGuests);
for (const guest of vipGuests.keys()) {
    console.log(guest);
}
for (const guest of regularGuests.keys()) {
    console.log(guest);
}
}

printingGuests(['7IK9Yo0h',
'9NoBUajQ',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);