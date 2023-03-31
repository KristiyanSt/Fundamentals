function printingEmployees(names){

    class Employee{
        constructor(name,personalNumber){
            this.name = name,
            this.personalNumber = personalNumber
        }
    }

    let employeesList = [];

    for (const name of names) {
        let personalNumber = name.length;
        employeesList.push(new Employee(name,personalNumber));
    }

    for (const employee of employeesList) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }


}

printingEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );