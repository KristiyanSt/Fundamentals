function convertingToJson(firstName,lastName,hairColor){
    let person = {
        name:firstName,
        lastName:lastName,
        hairColor:hairColor
    }
    console.log(JSON.stringify(person));

}

convertingToJson('George', 'Jones', 'Brown');