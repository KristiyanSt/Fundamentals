function printingResourceQuantity(input) {
    let resourceData = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!resourceData[resource]) {
            resourceData[resource] = 0;
        }
        resourceData[resource] += quantity;
    }
    for (const resource in resourceData) {
        console.log(`${resource} -> ${resourceData[resource]}`);
    }
}
printingResourceQuantity([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

);