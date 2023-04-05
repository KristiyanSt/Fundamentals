function printingTravelInfo(input) {
    let countries = {};
    for (const line of input) {
        let [country, town, expenses] = line.split(" > ");
        if (!countries[country]) {
            countries[country] = {};
        }
        if (!countries[country][town]) {
            countries[country][town] = Number(expenses);
        }
        else {
            if (countries[country][town] > Number(expenses)) {
                countries[country][town] = Number(expenses);
            }
        }
    }
    for (const [country, towns] of Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]))) {        
        let townsAndExpenses = [];
        for (const town of Object.entries(towns).sort((a, b) => a[1] - b[1])) {
            townsAndExpenses.push(town.join(" -> "));
        }
        console.log(`${country} -> ${townsAndExpenses.join(" ")}`);

    }
}
printingTravelInfo([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]

);