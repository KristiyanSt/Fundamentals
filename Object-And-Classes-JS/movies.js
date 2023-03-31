function printingMovies(input) {
    let moviesData = [];
    
    for (let line of input) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            moviesData.push({ name:name });

        }
        else if(line.includes('directedBy')){
            let [name,director] = line.split(' directedBy ');          
                let currentMovie = moviesData.find(m=>m.name === name);
                if(currentMovie){
                currentMovie.director = director;
                }
            
        }
        else if(line.includes('onDate')){
            let [name,date] = line.split(' onDate ');        
                let currentMovie = moviesData.find(m=>m.name === name);
                if(currentMovie){
                    currentMovie.date = date;
                }
        }
    }
    

    moviesData.forEach(m => {
        if(m.name && m.director && m.date){
            console.log(JSON.stringify(m));
        }
    });


}

printingMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)