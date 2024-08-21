export const getPokemonPictureById = (id: number | undefined) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const getPokemonPictureByURL = (url: string) => {
  const pokemon = url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '');
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
};
