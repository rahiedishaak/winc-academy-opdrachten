/* 
Opdracht 2a

makeCheeseSandwich:
- take a slice of bread.
- take a slice of cheese to put on top of slice of bread.
- take a slice of bread to put on top of slice of cheese.

function makeCheeseSandwich() {
    console.log('Take a slice of bread to put at bottom');
    console.log('Take a slice of cheese to put on top of slice of bread');
    console.log('Take a slice of bread to put on top of slice of cheese');
}

makeCheeseSandwich();
*/

/* 
Opdracht 2b

function makeSandwich(topping) {
    console.log('Take a slice of bread to put at bottom');
    console.log('Take ' + topping + ' to put on top of slice of bread');
    console.log('Take a slice of bread to put on top of ' + topping);
    console.log('There you go, a sandwich with ' + topping);
}

makeSandwich('hagelslag');
*/

/* 
Opdracht 2c


function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(7.75, 2)); // 6 euro
*/

/*
Opdracht 2d

function calcDiscount(totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
}

console.log(calcDiscount(27.5, 10)); // 18 euro
console.log(calcDiscount(10, 2)); // 10 euro
*/