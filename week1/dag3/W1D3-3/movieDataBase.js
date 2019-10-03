const movie = {
    title: 'GoldenEye',
    duration: '130',
    stars: ['Pierce Brosnan', 'Sean Bean', 'Famke Janssen']
}

function printMovie(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}.`);
}

printMovie(movie);