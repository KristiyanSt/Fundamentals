function printingProducts(currentStock,orderedProducts){
let products = {};
 
for(let i = 0;i<currentStock.length; i+=2){
    let currentProduct = currentStock[i];
    let quantity = Number(currentStock[i+1]);
    products[currentProduct] = quantity;
}
for(let i = 0; i<orderedProducts.length; i+=2){
    let orderedProduct = orderedProducts[i];
    let quantity = Number(orderedProducts[i+1]);

    if(products.hasOwnProperty(orderedProduct)){
        products[orderedProduct] += quantity;
    }
    else{
        products[orderedProduct] = quantity;
    }
}
for (const product  in products) {
   console.log(`${product} -> ${products[product]}`);
}

}
printingProducts([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )