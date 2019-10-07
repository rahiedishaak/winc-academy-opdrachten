// Opdracht 1
const superheroes = [{name: "Batman", alter_ego: "Bruce Wayne"}, {name: "Superman", alter_ego: "Clark Kent"}, {name: "Spiderman", alter_ego: "Peter Parker"}];

const findSuperhero = (array, superheroName) => array.find(item => item.name === superheroName);
console.log(findSuperhero(superheroes, 'Superman'));

// Opdracht 2
const numbers = [1, 2, 3];

const doubleNumbers = array => array.map(item => item * 2);
console.log(doubleNumbers(numbers));

// Opdracht 3
const moreNumers = [1, 4, 3, 6, 9, 7, 11];

const isGreaterThan10 = array => array.some(item => item > 10);
console.log(isGreaterThan10(moreNumers));

// Opdracht 4
const countries = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

const inGreat7 = (array, country) => array.includes(country);
console.log(inGreat7(countries, 'France'));

// Opdracht 5
const evenMoreNumers = [1, 4, 3, 6, 9, 7, 11];

const double = array => {
    const doubleArray = [];
    array.forEach(item => {
        doubleArray.push(item * 2);
    });
    return doubleArray;
};
console.log(double(evenMoreNumers));

// Opdracht 6
const manyNumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const below = (array, number) => array.filter(item => item < number);
console.log(below(manyNumbers, 100));

// Opdracht 7
const totalValues = array => array.reduce((total, item) => total + item, 0);
console.log(totalValues(manyNumbers));