import { PokemonList } from '../../App';

interface ListContainerProps {
  pokemonList?: PokemonList;
}

export default function ListContainer({ pokemonList }: ListContainerProps) {
  const getPokemonPicture = (url: string) => {
    const pokemon = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
  };

  return (
    <div className="wrapper">
      {pokemonList
        ? pokemonList?.map((pokemon, index) => {
            return (
              <div key={index} className="card">
                <div className="sprite-wrapper">
                  <img
                    src={getPokemonPicture(pokemon.url)}
                    alt={pokemon.name}
                  />
                  <span>{pokemon.name}</span>
                </div>
              </div>
            );
          })
        : 'Carregando...'}
    </div>
  );
}
