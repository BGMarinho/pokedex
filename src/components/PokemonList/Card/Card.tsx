import * as S from './styles';
import { getPokemonPictureByURL } from '../../../helpers/getPokemonPicture';
import {
  ITypePokemonList,
  IPokemonList,
  IPokemon,
  ITypePokemon,
} from '../interfaces';

interface CardProps {
  key: number;
  pokemon?: IPokemon;
  typePokemon?: ITypePokemon;
}

export default function Card({ typePokemon, pokemon, key }: CardProps) {
  return (
    <S.CardWrapper key={key}>
      {typePokemon ? (
        <>
          <img
            src={getPokemonPictureByURL(typePokemon?.pokemon.url)}
            alt={typePokemon.pokemon.name}
          />
          <span>{typePokemon.pokemon.name}</span>
        </>
      ) : pokemon ? (
        <>
          <img src={getPokemonPictureByURL(pokemon.url)} alt={pokemon.name} />
          <span>{pokemon.name}</span>
        </>
      ) : null}
    </S.CardWrapper>
  );
}
