// State with dentists, assistants, patients, appointments
const state = {
  dentists: [
    {
      id: 1, 
      name: 'Raymond', 
      surname: 'Dijkstra',
      phone: '0612345678',
      email: 'raymond@tandartspraktijkbvt.nl',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 2, 
      name: 'Michael', 
      surname: 'Derksen',
      phone: '0612345679',
      email: 'michael@tandartspraktijkbvt.nl',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 3, 
      name: 'Lieke', 
      surname: 'Harmsen',
      phone: '0612345670',
      email: 'lieke@tandartspraktijkbvt.nl',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 4, 
      name: 'Karin', 
      surname: 'de Vries',
      phone: '0612345671',
      email: 'karin@tandartspraktijkbvt.nl',
      isAvailable: true,
      appointments: []  
    }
  ],
  assistants: [
    {
      id: 1, 
      name: 'Mirjan', 
      surname: 'van der Voort',
      phone: '0612345672',
      email: 'mirjan@tandartspraktijkbvt.nl',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 2, 
      name: 'Ralf', 
      surname: 'Smit',
      phone: '0612345673',
      email: 'ralf@tandartspraktijkbvt.nl',
      isAvailable: true,
      appointments: []  
    },
  ],
  patients: [
    {
      id: 1, 
      name: 'Nick', 
      surname: 'ten Brink',
      birthYear: 1990,
      phone: '0600000001',
      email: 'nick.tenbrink@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 2, 
      name: 'Daphne', 
      surname: 'Broersen',
      birthYear: 1992,
      phone: '0600000002',
      email: 'daphne.broersen@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 3, 
      name: 'Mark', 
      surname: 'Verhulst',
      birthYear: 1998,
      phone: '0600000003',
      email: 'mark.verhulst@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 4, 
      name: 'Lisa', 
      surname: 'de Bruijn',
      birthYear: 1968,
      phone: '0600000004',
      email: 'lisa.debruijn@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 5, 
      name: 'Pierre', 
      surname: 'Penders',
      birthYear: 1952,
      phone: '0600000005',
      email: 'pierre.penders@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 6, 
      name: 'Vivianne', 
      surname: 'Schenning',
      birthYear: 2000,
      phone: '0600000006',
      email: 'vivianne.schenning@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 7, 
      name: 'Viktor', 
      surname: 'van Leerdam',
      birthYear: 1948,
      phone: '0600000007',
      email: 'viktor.vanleerdam@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 8, 
      name: 'Milou', 
      surname: 'van den Bergh',
      birthYear: 1982,
      phone: '0600000008',
      email: 'milou.vandenbergh@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 9, 
      name: 'Henri', 
      surname: 'Zoomers',
      birthYear: 1973,
      phone: '0600000009',
      email: 'henri.zoomers@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 10, 
      name: 'Mary', 
      surname: 'van der Wal',
      birthYear: 1965,
      phone: '0600000010',
      email: 'mary.vanderwal@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 11, 
      name: 'Gijs', 
      surname: 'Alberts',
      birthYear: 1976,
      phone: '0600000011',
      email: 'gijs.alberts@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 12, 
      name: 'Sandra', 
      surname: 'Doornbos',
      birthYear: 1987,
      phone: '0600000012',
      email: 'sandra.doornbos@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 13, 
      name: 'John', 
      surname: 'Kriek',
      birthYear: 1947,
      phone: '0600000013',
      email: 'john.kriek@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 14, 
      name: 'Stefanie', 
      surname: 'Petersen',
      birthYear: 1954,
      phone: '0600000014',
      email: 'stefanie.petersen@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 15, 
      name: 'Christian', 
      surname: 'Verstappen',
      birthYear: 1968,
      phone: '0600000015',
      email: 'christian.verstappen@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 16, 
      name: 'Yvette', 
      surname: 'de Mol',
      birthYear: 1979,
      phone: '0600000016',
      email: 'yvette.demol@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 17, 
      name: 'Erik', 
      surname: 'Verbeek',
      birthYear: 1986,
      phone: '0600000017',
      email: 'erik.verbeek@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 18, 
      name: 'Eva', 
      surname: 'Winter',
      birthYear: 1980,
      phone: '0600000018',
      email: 'eva.winter@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 19, 
      name: 'Casper', 
      surname: 'Hiemstra',
      birthYear: 1993,
      phone: '0600000019',
      email: 'casper.hiemstra@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 20, 
      name: 'Mieke', 
      surname: 'Heemskerk',
      birthYear: 1996,
      phone: '0600000020',
      email: 'mieke.heemskerk@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 21, 
      name: 'Jos', 
      surname: 'van der Garde',
      birthYear: 1971,
      phone: '0600000021',
      email: 'jos.vandergarde@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 22, 
      name: 'Nynke', 
      surname: 'Verschoor',
      birthYear: 1991,
      phone: '0600000022',
      email: 'nynke.verschoor@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 23, 
      name: 'Mohamed', 
      surname: 'Ibrahim',
      birthYear: 1981,
      phone: '0600000023',
      email: 'mohamed.ibrahim@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 24, 
      name: 'Fatima', 
      surname: 'Dogan',
      birthYear: 1983,
      phone: '0600000024',
      email: 'fatima.dogan@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 25, 
      name: 'Simon', 
      surname: 'Kooiman',
      birthYear: 1953,
      phone: '0600000025',
      email: 'simon.kooiman@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 26, 
      name: 'Renee', 
      surname: 'Kooistra',
      birthYear: 1949,
      phone: '0600000026',
      email: 'renee.kooistra@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 27, 
      name: 'Robin', 
      surname: 'de Bakker',
      birthYear: 1999,
      phone: '0600000027',
      email: 'robin.debakker@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 28, 
      name: 'Laura', 
      surname: 'van Wijk',
      birthYear: 1976,
      phone: '0600000028',
      email: 'laura.vanwijk@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 29, 
      name: 'Edward', 
      surname: 'Genee',
      birthYear: 1978,
      phone: '0600000029',
      email: 'edward.genee@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 30, 
      name: 'Irene', 
      surname: 'van Dijk',
      birthYear: 1984,
      phone: '0600000030',
      email: 'irene.vandijk@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 31, 
      name: 'Jelle', 
      surname: 'van de Beek',
      birthYear: 1987,
      phone: '0600000031',
      email: 'jelle.vandebeek@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 32, 
      name: 'Desiree', 
      surname: 'Verschuur',
      birthYear: 1977,
      phone: '0600000032',
      email: 'desiree.verschuur@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 33, 
      name: 'Harm', 
      surname: 'ter Weijden',
      birthYear: 1989,
      phone: '0600000033',
      email: 'harm.terweijden@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 34, 
      name: 'Esther', 
      surname: 'Balk',
      birthYear: 2001,
      phone: '0600000034',
      email: 'esther.balk@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 35, 
      name: 'Danny', 
      surname: 'Hofstra',
      birthYear: 1942,
      phone: '0600000035',
      email: 'danny.hofstra@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 36, 
      name: 'Sofie', 
      surname: 'Bergsma',
      birthYear: 1975,
      phone: '0600000036',
      email: 'sofie.bergsma@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 37, 
      name: 'Pieter', 
      surname: 'van der Spek',
      birthYear: 1966,
      phone: '0600000037',
      email: 'pieter.vanderspek@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 38, 
      name: 'Marloes', 
      surname: 'Snijder',
      birthYear: 1977,
      phone: '0600000038',
      email: 'marloes.snijder@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 39, 
      name: 'Luca', 
      surname: 'Toldo',
      birthYear: 1974,
      phone: '0600000039',
      email: 'luca.toldo@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 40, 
      name: 'Sylvia', 
      surname: 'van Amersfoort',
      birthYear: 1963,
      phone: '0600000040',
      email: 'sylvia.vanamersfoort@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 41, 
      name: 'Allard', 
      surname: 'Vervoort',
      birthYear: 1957,
      phone: '0600000041',
      email: 'allard.vervoort@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 42, 
      name: 'Marleen', 
      surname: 'van de Velde',
      birthYear: 1968,
      phone: '0600000042',
      email: 'marleen.vandevelde@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 43, 
      name: 'Ruud', 
      surname: 'Wevers',
      birthYear: 1998,
      phone: '0600000043',
      email: 'ruud.wevers@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 44, 
      name: 'Annet', 
      surname: 'Kramer',
      birthYear: 1991,
      phone: '0600000044',
      email: 'annet.kramer@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 45, 
      name: 'Anton', 
      surname: 'Visser',
      birthYear: 1981,
      phone: '0600000045',
      email: 'anton.visser@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 46, 
      name: 'Hennie', 
      surname: 'van Dam',
      birthYear: 1951,
      phone: '0600000046',
      email: 'hennie.vandam@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 47, 
      name: 'Jaap', 
      surname: 'van Loon',
      birthYear: 1943,
      phone: '0600000047',
      email: 'jaap.vanloon@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 48, 
      name: 'Nel', 
      surname: 'van Damme',
      birthYear: 1938,
      phone: '0600000048',
      email: 'nel.vandamme@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 49, 
      name: 'Melroy', 
      surname: 'van der Zande',
      birthYear: 1989,
      phone: '0600000049',
      email: 'melroy.vanderzande@outlook.com',
      isAvailable: true,
      appointments: []  
    },
    {
      id: 50, 
      name: 'Petra', 
      surname: 'Zeinstra',
      birthYear: 1982,
      phone: '0600000050',
      email: 'petra.zeinstra@outlook.com',
      isAvailable: true,
      appointments: []  
    },
  ],
  appointments: []
};

// push state to localStorage, only uncomment these lines when running app for first time
// const stateJSON = JSON.stringify(state);
// localStorage.setItem('state', stateJSON);

// fetch state from localStorage
const fetchState = () => {
  const stateJSON = localStorage.getItem('state');
  return JSON.parse(stateJSON);
};