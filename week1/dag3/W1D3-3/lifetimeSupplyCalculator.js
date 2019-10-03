function calculateSupply(age, amount) {
    const maxAge = 120;
    const needed = (maxAge - age) * (amount * 365);
    const neededRounded = Math.round(needed);
    console.log(`You will need ${neededRounded} to last you until the ripe old age of ${maxAge}.`); 
}

calculateSupply(29, 2.5);
calculateSupply(45, 4.5);
calculateSupply(70, 3.5);