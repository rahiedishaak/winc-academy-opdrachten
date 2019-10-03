function calcCircumfrence(radius) {
    const diameter = 2 * radius;
    const circumfrence = Math.PI * diameter;
    console.log(`The circumference is ${circumfrence}`);
}

calcCircumfrence(10);
calcCircumfrence(20);
calcCircumfrence(30);

function calcArea(radius) {
    const area = Math.PI * radius**2;
    console.log(`The area is ${area}`);
}

calcArea(10);
calcArea(20);
calcArea(30);