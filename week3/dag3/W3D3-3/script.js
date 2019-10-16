const renderToDOM = async () => {
  try {
    const genres = await getMovies();
    document.body.innerHTML = `<pre>${JSON.stringify(genres, null, ' ')}</pre>`;
  } catch(error) {
    console.log(error);
  }
};

renderToDOM();
