import { getPokemonPictureById } from '../../helpers/getPokemonPicture';
import * as S from './styles';

interface PokemonCardProps {
  foundPokemonId?: number;
  foundPokemonName?: string;
}

export default function PokemonCard({
  foundPokemonId,
  foundPokemonName,
}: PokemonCardProps) {
  return (
    <S.PokemonCardWrapper>
      <img src={getPokemonPictureById(foundPokemonId)} alt={foundPokemonName} />
      <p>{foundPokemonName}</p>
    </S.PokemonCardWrapper>
  );
}
