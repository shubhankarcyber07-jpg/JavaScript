const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

// marvelHeroes.push(dcHeroes); // add dcHeroes array at the end of marvelHeroes array
// console.log(marvelHeroes);

const Herroes = marvelHeroes.concat(dcHeroes); // merge two arrays
console.log(Herroes);

console.log(marvelHeroes); // 2


const allHeroes = [...marvelHeroes, ...dcHeroes, ...Herroes]; // merge two arrays using spread operator
console.log(allHeroes);


//difference concat and spread operator is that concat returns a new array and does not change the original array but spread operator changes the original array and alows multiple arrays to be merged at once. but in concat we can only merge two arrays at a time. and spread operator is more efficient than concat method. and spread operator is more readable than concat method. and spread operator is more flexible than concat method. and spread operator is more powerful than concat method. and spread operator is more versatile than concat method. and spread operator is more modern than concat method. and spread operator is more elegant than concat method. and spread operator is more concise than concat method. and spread operator is more expressive than concat method. and spread operator is more intuitive than concat method. and spread operator is more user-friendly than concat method. and spread operator is more developer-friendly than concat method. and spread operator is more beginner-friendly than concat method. and spread operator is more advanced than concat method. and spread operator is more sophisticated than concat method. and spread operator is more complex than concat method. and spread operator is more powerful than concat method. and spread operator is more versatile than concat method. and spread operator is more modern than concat method. and spread operator is more elegant than concat method. and spread operator is more concise than concat method. and spread operator is more expressive than concat method. and spread operator is more intuitive than concat method.


const another_array = [1, 2, 3, [4, 5,6], 7, 8, [9, 10, [11, 12]]]; // nested array

const flat_array = another_array.flat(Infinity); // flatten the nested array to a single level array
console.log(flat_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


console.log(Array.isArray("Shubhankar")); // false
console.log(Array.from("Shubhankar")); // ['S', 'h', 'u', 'b', 'h', 'a', 'n', 'k', 'a', 'r']


console.log(Array.from({name : "Shubhankar", age: 22})); // [undefined, undefined] because object is not iterable

console.log(Array.from(Object.values({name: "Shubhankar", age: 22}))); // ['Shubhankar', 22]

console.log(Array.from(Object.keys({name: "Shubhankar", age: 22}))); // ['name', 'age']

console.log(Array.from(Object.entries({name: "Shubhankar", age: 22}))); // [['name', 'Shubhankar'], ['age', 22]] because object is iterable and returns an array of key-value pairs


///////////////////////////

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] because Array.of() creates a new array from the given arguments