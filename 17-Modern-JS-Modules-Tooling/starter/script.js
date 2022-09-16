// Importing module
// import {
//   addToCart,
//   cart /*, totalPrice as price, tq */,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

//console.log('Importing module');
//console.log(shippingCost);

import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log('Total price: ' + ShoppingCart.totalPrice);

// The function is named in the importing process
// It's also possible to import in several ways at the same time like below
// BUT it is bad practice
// console.log(price);
// import add, {
//   cart /* { addToCart, totalPrice as price, tq } */,
// } from './shoppingCart.js';
// addToCart('pizza', 2, 'offwhite');
// addToCart('bread', 5, 'offwhite');
// addToCart('apples', 4, 'red');
// console.log(cart);

/* 
    Top Level Await
*/
/* // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
//lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
 */

/* const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log({ product, quantity, color });
    console.log(`${quantity} ${product}ordered from suplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2); */
