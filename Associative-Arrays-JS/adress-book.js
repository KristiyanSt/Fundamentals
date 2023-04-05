function sortingPeopleAdresses(input){
    let peopleAdresses = {};
    for (const line of input) {
        let [name,adress] = line.split(":");
        if(!peopleAdresses[name]){
            peopleAdresses[name] = "";
        }
        peopleAdresses[name] = adress;
    }
    let peopleAdressesEntries = Object.entries(peopleAdresses);
    for (const entry of peopleAdressesEntries.sort((a,b) => a[0].localeCompare(b[0]))) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
sortingPeopleAdresses(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);