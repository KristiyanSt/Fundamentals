function printingCityData(cityObj){

    for(let line of Object.keys(cityObj)){
        console.log(`${line} -> ${cityObj[line]}`)
    }
}

printingCityData({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);