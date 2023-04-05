function printingOddOccurences(input) {
    let elementsOccurs = {};

    for (let element of input.split(" ")) {
        element = element.toLowerCase();
        if(!elementsOccurs[element]){
            elementsOccurs[element] = 0;
        }
        elementsOccurs[element]++;

    }
    let oddOccurs = [];
    for (const element in elementsOccurs) {
        if(elementsOccurs[element] % 2 !== 0){
            oddOccurs.push(element);
        }
    }
    console.log(oddOccurs.join(" "));
}

printingOddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');