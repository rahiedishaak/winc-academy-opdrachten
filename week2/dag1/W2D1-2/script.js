// Opdracht 1
const wincNudge = 'Winc Winc, nudge nudge';
const numbers = [1, 2, 3, 4];

const arrayOrNot = value => Array.isArray(value);
console.log(arrayOrNot(wincNudge));

// Opdracht 2
const benelux = ["Belgie", 1, "Nederland", 2, "Luxemburg", 3];

const selectFirst = array => array[0];
console.log(selectFirst(benelux));

// Opdracht 3
const presidents = ["Trump", "Obama", "Bush", "Clinton"] ;

const removeFirst = array => {
    array.shift();
    return array;
};
console.log(removeFirst(presidents));

// Opdracht 4
const winc = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

const arrayToString = array => array.join(' ');
console.log(arrayToString(winc));

// Opdracht 5
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const concatArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(concatArrays(firstArray, secondArray));