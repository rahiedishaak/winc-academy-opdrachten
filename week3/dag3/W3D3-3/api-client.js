const API_Key = 'dbc6e380a2af1e5c9ec4f7639733fadd';
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_Key}`;

const getMovies = async () => {
  try {
    const response = await fetch(apiUrl);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
