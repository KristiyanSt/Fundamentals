function printingSongs(songsArgs){
    let numberOfSongs = songsArgs.shift();
    let lastCommand = songsArgs.pop();
    let songList = [];

    class Song{

        constructor(type,name,time){
            this.type = type,
            this.name = name,
            this.time = time
        }
    }

    for (const song of songsArgs) {
        let [type,name,time] = song.split('_');
        songList.push(new Song(type,name,time));
    }

    if(lastCommand === 'all'){
        for (const song of songList) {
            console.log(song.name);
        }
    }
    else{
        for(const song of songList.filter(s=>s.type ===lastCommand)){
            console.log(song.name);
        }
    }

}

printingSongs([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']

    );