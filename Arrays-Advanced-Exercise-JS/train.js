function addingPassengers(commands) {

    let wagons = commands.shift().split(' ').map(Number);

    let maxCapacity = commands.shift();

    for (let i = 0; i < commands.length; i++) {

        let currentCommand = commands[i].split(' ');
        if (currentCommand[0] == 'Add') {

            let passengers = Number(currentCommand[1]);
            wagons.push(passengers);

        }
        else {

            let passengers = Number(currentCommand);

            for (let i = 0; i < wagons.length; i++) {

                if (wagons[i] + passengers > maxCapacity) {
                    continue;
                }
                else {
                    wagons[i] += passengers;
                    break;
                }
            }

        }


    }
    console.log(wagons.join(' '));


}

addingPassengers(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);