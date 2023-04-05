function printingItems(input) {
    let items = new Map();
    for (const line of input) {
        let [name,quantity] = line.split(" ");
        if(items.has(name)){
            let currentQuantity = Number(items.get(name));
            items.set(name,currentQuantity+Number(quantity));
        }
        else{
            items.set(name,quantity);
        }
    }
    for (const [name,quantity] of items) {
        console.log(`${name} -> ${quantity}`);
    }

}
printingItems(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);