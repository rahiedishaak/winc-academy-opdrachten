const API_KEY = 'dbc6e380a2af1e5c9ec4f7639733fadd';

const getData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    return response.json();
  } catch(error) {
    console.log(error);
  }
}

const getMovie = async (movieID) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`;
  return await getData(apiUrl);
};

const getMovieGenres = async () => {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  return await getData(apiUrl)
};

const getTopRatedMovies = async (year) => {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&year=${year}&sort_by=popularity.desc&page=1`;
  return await getData(apiUrl);
};

const getTopRatedActionMovies = async () => {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&page=1`;
  return await getData(apiUrl);
};
