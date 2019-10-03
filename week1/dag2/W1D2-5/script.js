const age = 29;

if (age >= 18) {
    console.log('Kom binnen! Je bent van harte welkom!');
    if (age >= 18 && age <= 25) {
        console.log('Je krijgt 50% korting!');
    } else {
        console.log('Je komt helaas niet in aanmerking voor korting');
    }
} else {
    console.log('Je bent helaas nog te jong voor onze kroeg');
}

const name = 'Sarah';

if (name === 'Bram' || name === 'Sarah') {
    console.log('Je krijgt een gratis biertje!');
} else {
    console.log('Je krijgt helaas geen gratis biertje.');
}

const totalAmount = 15;

if (totalAmount >= 100) {
    console.log('Je krijgt een gratis fles champagne!');
} else if (totalAmount >= 50) {
    console.log('Je krijgt een gratis portie nachos!');
} else if (totalAmount >= 25) {
    console.log('Je krijgt een gratis portie (vega)bitterballen!');
} else {
    console.log('Nog iets meer uitgeven en je krijgt een cadeau!');
}