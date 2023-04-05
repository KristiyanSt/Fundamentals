function printingPhoneNumbers(input){

    let phoneNumbers = {};
    for (const line of input) {
        let [name,number] = line.split(" ");
        if(!phoneNumbers[name]){
            phoneNumbers[name] = "";
        }

        phoneNumbers[name] = number;
    }
    for (const name in phoneNumbers) {
        console.log(`${name} -> ${phoneNumbers[name]}`);
    }
}
printingPhoneNumbers(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);