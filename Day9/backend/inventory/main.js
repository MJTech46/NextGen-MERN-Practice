import { addProduct, listProduct } from "./inventory.js";

// Initialize an empty array to store products
let products = [];

// Add products
addProduct(products, { name: 'Laptop', price: 1000 });
addProduct(products, { name: 'Smartphone', price: 500 });

// List products
console.log("product list :",listProduct(products));