import { getPokemonPictureById } from '../../helpers/getPokemonPicture';

interface PokemonCardProps {
  foundPokemonId?: number;
  foundPokemonName?: string;
  // types?: string;
}

export default function PokemonCard({
  foundPokemonId,
  foundPokemonName,
  // types,
}: PokemonCardProps) {
  return (
    <>
      <img src={getPokemonPictureById(foundPokemonId)} alt={foundPokemonName} />
      <p>{foundPokemonName}</p>
      {/* <p>{types}</p> */}
    </>
  );
}
