function printingCompaniesEmployees(input) {
    let companies = {};
    for (const companyArgs of input) {
        let [name, id] = companyArgs.split(" -> ");
        if (!companies[name]) {
            companies[name] = new Set();
        }
        if (!companies[name].has(id)) {
            companies[name].add(id);
        }
    }
    for (const [name, ids] of Object.entries(companies).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))) {
        console.log(name);
        for (const id of ids) {
            console.log(`-- ${id}`);
        }
    }
}
printingCompaniesEmployees([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);