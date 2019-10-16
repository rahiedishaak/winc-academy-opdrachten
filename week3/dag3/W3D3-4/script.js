const logMovieGenres = async () => {
  try {
    let genres = await getMovieGenres();
    genres = genres.genres;
    genres.forEach(genre => {
      console.log(`${genre.id}: ${genre.name}`);
    })
  } catch (error) {
    console.log(error);
  }
};

// logMovieGenres();

const showMovieTitle = async (movieID) => {
  try {
    let movie = await getMovie(movieID);
    document.body.innerHTML = `<h1>${movie.title}</h1>`
  } catch (error) {
    console.log(error);
  }
}

// showMovieTitle(420818); // The Lion King
// showMovieTitle(475557); // The Joker
// showMovieTitle(301528) // Toy Story 4
// showMovieTitle(710) // GoldenEye

const logMovies = movies => {
  movies = movies.results;
  movieTitles = movies.map(movie => movie.title);
  for(let i = 0; i < 10; i++ ) {
    console.log(movieTitles[i]);
  }
}

const logTopRatedMovies = async (year) => {
  try {
    let movies = await getTopRatedMovies(year);
    logMovies(movies);
  } catch (error) {
    console.log(error);
  }
};

// logTopRatedMovies(2000); // Top Rated Movies from 2000
// logTopRatedMovies(2019); // Top Rated Movies from 2019
logTopRatedMovies(1975); // Top Rated Movies from 1975

const logTopRatedActionMovies = async () => {
  try {
    let movies = await getTopRatedActionMovies();
    logMovies(movies);
  } catch (error) {
    console.log(error);
  }
};

// logTopRatedActionMovies();
