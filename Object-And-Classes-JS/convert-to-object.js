function convetingToJSON(json){

    let person = JSON.parse(json);

    for(let line of Object.keys(person)){

        console.log(`${line}: ${person[line]}`);
    }

}

convetingToJSON('{"name": "George", "age": 40, "town": "Sofia"}');