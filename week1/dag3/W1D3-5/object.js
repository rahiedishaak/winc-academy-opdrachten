const rahied = {
    name: 'Rahied Ishaak',
    age: 29,
    city: 'Hoogeveen',
    job: 'Student',
    nationality: 'Dutch'
};

const properties = Object.keys(rahied);
properties.forEach(property => {
    console.log(property);
});

/* Vraag
4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
Dit kan dankzij Object.keys(obj). Via Object.keys(obj) krijg je een array terug met daarin alle properties van obj. Vervolgens kan je een forEach method loslaten op de array. */