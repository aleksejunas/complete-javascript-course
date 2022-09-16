// Exporting module
console.log('Exporting module');

// console.log('Start fetching users');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity, color) {
  cart.push({ product, quantity, color });
  console.log(`${quantity} ${product} ${color} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// No need to name the function, that happens in the import process
// export default function (product, quantity, color) {
//   cart.push({ product, quantity, color });
//   console.log(`${quantity} ${product} ${color} added to cart`);
// }
