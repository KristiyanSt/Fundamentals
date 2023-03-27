function loadingBar(number){

let bar = '';

let percentLoadingCount = number / 10;
let remainLoadingCount = (100 - number)/10;

bar += ('%').repeat(percentLoadingCount);
bar += ('.').repeat(remainLoadingCount);

if(number === 100){

    console.log(`${number}% Complete!`);

}
else{
    console.log(`${number}% [${bar}]`);
    console.log('Still loading...');
}

}

loadingBar(0);