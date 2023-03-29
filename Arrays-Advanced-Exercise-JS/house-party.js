function modifiyingListOfGuests(commands){

    let listOfGuests = [];

    for(let i = 0; i<commands.length; i++){
        let commandArgs = commands[i].split(' ');
        let name = commandArgs[0];
        
        if(commandArgs.length<=3){
            if(!listOfGuests.includes(name)){

                listOfGuests.push(name);
            }
            else{
                console.log(`${name} is already in the list!`);
            }
        }
        else{
            if(!listOfGuests.includes(name)){

                console.log(`${name} is not in the list!`);
            }
            else{
                let index = listOfGuests.indexOf(name);
                listOfGuests.splice(index,1);
            }
        }
    }
    for(let name of listOfGuests){
        console.log(name);
    }

}

modifiyingListOfGuests(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);