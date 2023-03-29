function sortingArray(input){

    input.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    for(let text of input){
        console.log(text);
    }

}
sortingArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);