// Generate random number between 1 and 150, to generate a Pokemon of the first Generation
const getPokemon = async (pokemonID) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    return response.json()
  } catch (error) {
    console.error(error);
  }
};
