function manageMeetings(input){
    let meetings = {};

    for (const line of input) {
        let [day,name] = line.split(" ");
        if(meetings[day]){
            console.log(`Conflict on ${day}!`);
        }
        else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}
manageMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);