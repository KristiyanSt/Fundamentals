function printingWordsOccurences(input){
    let wordsOccurences = {};
    let wordsToFind = input.shift().split(" ");
    for (const word of wordsToFind) {
        wordsOccurences[word] = 0;
    }
    for (const line of input){
        for (const word of wordsToFind) {
            if(line == word){
                wordsOccurences[word]++;
            }
        }
    }
    for (const [word,count] of Object.entries(wordsOccurences).sort((a,b)=>b[1] - a[1])) {
        console.log(`${word} - ${count}`);
    }
}

printingWordsOccurences([
    'thiz sendence' ,
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );