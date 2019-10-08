// Zet JSON-data om in een Javascript-array, opdrachten vanaf regel 108 
const superheroes = JSON.parse(`[
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]`);

// Opdracht 1
const names = superheroes.map(item => item.name);

// // Opdracht 2
const light = superheroes.filter(item => parseInt(item.weight) < 190);

// Opdracht 3
const names200 = superheroes
                            .filter(item => parseInt(item.weight) === 200)
                            .map(item => item.name);

// Opdracht 4
const firstAppearance = superheroes
                            .filter(item => item.hasOwnProperty('first_appearance'))
                            .map(item => item['first_appearance']);

// Opdracht 5
const dc = superheroes.filter(item => item.publisher === 'DC Comics');
const marvel = superheroes.filter(item => item.publisher === 'Marvel Comics');

// Opdracht 6
const totalWeightDC = dc.reduce((total, item) => total + parseInt(item.weight), 0);

// Opdracht 7
const totalMarvelHeight = marvel
                            .filter(item => item.weight !== 'unknown')
                            .reduce((total, item) => total + parseInt(item.weight), 0);

// Bonus
const heaviest = superheroes
                    .filter(item => item.weight !== 'unknown')
                    .reduce((max, item) => (parseInt(item.weight) > max) ? parseInt(item.weight) :  max, 0);