function printingAverageGrades(input){

    let studentsGrades = {};
    for (const line of input) {
        let studentsArgs = line.split(" ");
        let name = studentsArgs.shift();
        if(!studentsGrades[name]){
            studentsGrades[name] = [];
        }
        let currGrades = studentsGrades[name];
        studentsGrades[name] = currGrades.concat(studentsArgs);
    }
    for (const name in studentsGrades) {
        let sum = 0;
        
        for (const grade of studentsGrades[name].map(Number)) {
            sum += grade;
        }
        studentsGrades[name] = sum/studentsGrades[name].length;
    }

    let studentsGradesEntries = Object.entries(studentsGrades);
    for (const [name,grade] of studentsGradesEntries.sort((a,b) => a[0].localeCompare(b[0]))) {
        console.log(`${name}: ${grade.toFixed(2)}`);
    }
}
printingAverageGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);