// Rest operator
const addNumbers = (...numbers) => numbers.reduce((total, current) => total + current);

console.log(addNumbers(10, 20, 30, 40)); // 100
console.log(addNumbers(100, 200, 300)); // 600

// Spread operator
const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8, 10];

const add = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5;
console.log(add(...odd)); // 25
console.log(add(...even)); // 30

// Merge arrays with spread
const all = [...odd, ...even];
console.log(all); // [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
