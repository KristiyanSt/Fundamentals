function processingTextTable(data){
let town = {};

for (const townInfo of data) {
let [name,latitude,longitude] = townInfo.split(' | ');

town.town = name;
town.latitude = (+latitude).toFixed(2);
town.longitude = (+longitude).toFixed(2);

console.log(town);
}

}


processingTextTable(['Sofia | 42.696552 | 23.32601',
                    'Beijing | 39.913818 | 116.363625']
);