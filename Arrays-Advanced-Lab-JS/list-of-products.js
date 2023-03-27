function sortedListOfProducts(products){

    products.sort();

    for(let i = 1; i<=products.length;i++){

        console.log(`${i}.${products[i-1]}`);
    }


}

sortedListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples','apples']);