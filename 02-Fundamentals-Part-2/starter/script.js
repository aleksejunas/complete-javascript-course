
/* ----- MY CODE ----- */

/* const friends = ['Michael', 'Steven', 'Peter'];

// Add elements

const newLength = friends.push('Jay'); // Pushes item to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Puts item in the front of the array
console.log(friends);

// Remove elements

friends.pop(); // Removes the last item
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // Removes the first element
console.log(friends);

//Index of

console.log(friends.indexOf('Steven'));
friends.push('Rokas');
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('Rokas'));
console.log(friends);

if (friends.includes('Steven')){
  console.log('You have a friend called Steven');
}
 */
// ----- END OF MY CODE .....

/* const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
]; */



/* What the for loop does
console.log(jonas[0]);
console.log(jonas[1]);
console.log(jonas[2]);
console.log(jonas[3]);
console.log(jonas[4]); */

/* const types = [];

for (let i = 0; i < jonas.length; i++){
    // Reading from jinas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
};

console.log(types); */

// Calculates how old someone is in the year 2037 (birthyear in years array)
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // Continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++){

//     if (typeof jonas[i] !== 'string') continue; // Logs just the string to the console

//   console.log(jonas[i], typeof jonas[i]);
// };

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++){

//     if (typeof jonas[i] === 'number') break; // Breaks as soon as it finds a number

//   console.log(jonas[i], typeof jonas[i]);
// };


// Looping backwards trough an array
  const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

for (let i = jonas.length - 1; i >= 0; i-- ){
    console.log(i, jonas[i]);
}

// Nested loop

for (let exercise = 1; exercise <= 4; exercise++){
    console.log(`-------- STARTING EXCERCISE ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weigth repetition ${rep}🏋`);
    }

};

