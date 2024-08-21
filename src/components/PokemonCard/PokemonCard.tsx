import { getPokemonPictureById } from '../../helpers/getPokemonPicture';

interface PokemonCardProps {
  foundPokemonId?: number;
  foundPokemonName?: string;
}

export default function PokemonCard({
  foundPokemonId,
  foundPokemonName,
}: PokemonCardProps) {
  return (
    <>
      <img src={getPokemonPictureById(foundPokemonId)} alt={foundPokemonName} />
      <p>{foundPokemonName}</p>
    </>
  );
}
