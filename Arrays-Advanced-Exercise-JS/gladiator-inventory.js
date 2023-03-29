function modifiyingInventory(input) {
    let inventory = input.shift().split(' ');


    for (let i = 0; i < input.length; i++) {

        let command = input[i].split(' ');
        let operation = command[0];
        if (operation === 'Buy') {

            let equipment = command[1];
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        }
        else if (operation === 'Trash') {
            let equipment = command[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        }
        else if (operation === 'Repair') {
            let equipment = command[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        }
        else if (operation === 'Upgrade') {
            let [equipment, upgrade] = command[1].split('-');
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment) + 1;
                inventory.splice(index, 0, `${equipment}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));

}

modifiyingInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);