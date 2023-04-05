function printingWordsCount(input){
    let words = {};
    for (const word of input) {
        if(!words[word]){
            words[word] = 0;
        }
        words[word]++;
    }
    let wordsEntries = Object.entries(words);

    for (const [word,count] of wordsEntries.sort((a,b) => b[1] - a[1])) {
        console.log(`${word} -> ${count} times`);
    }
}
printingWordsCount(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);