function recordingCarsNumbers(input) {
    let carsLogged = {};
    for (const line of input) {
        let [direction, carNumber] = line.split(", ");
        if (direction === 'IN') {
            carsLogged[carNumber] = carNumber.slice(2, 6);
        }
        else if(direction === 'OUT'){
            if(carsLogged[carNumber]){
                delete carsLogged[carNumber];
            }           
        }
    }
    if (Object.keys(carsLogged).length > 0) {
        for (const [carNumber, number] of Object.entries(carsLogged).sort()) {
            console.log(carNumber);
        }
    }
    else {
        console.log('Parking Lot is Empty');
    }
}
recordingCarsNumbers(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']


);