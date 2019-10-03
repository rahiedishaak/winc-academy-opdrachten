// Objects
const person = {
    name: 'Rahied Ishaak',
    age: 29
};

console.log(person);
console.log(person.name);
console.log(person['age']);

// Arrays
const colors = ['red', 'green', 'blue'];

console.log(colors);
console.log(colors[0]);

colors[colors.length] = 'yellow';
colors[colors.length] = 5;
colors.push('orange');

console.log(colors);
console.log(colors.length);