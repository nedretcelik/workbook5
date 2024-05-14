"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];

// Which candies costs less than $4.00?

let productCostUnder4 = products.filter(product => product.price < 4).forEach(product => console.log(`candies costs less than $4.00:  ${product.product}`))


// Which candies has "M&M" its name?
let candiesIncludeMM =  products.filter(product => product.product.indexOf("M&M") !== -1).forEach(product =>
    console.log(`candies has "M&M" its name: ${product.product} ` )
)



// Do we carry "Swedish Fish"?

let foundSwedishFish = products.find(product => product.product == "Swedish Fish")
console.log(`Yes we do carry ${foundSwedishFish.product}`)





