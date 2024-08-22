import * as S from './styles';
import { useEffect, useState } from 'react';

interface DetailsProps {
  identification?: number;
  showDetails?: boolean;
}

interface PokemonStats {
  base_stat: number;
  stat: { name: string };
}

type PokemonType = {
  type: { name: string };
};

export default function Details({ showDetails, identification }: DetailsProps) {
  const [pokemonStats, setPokemonStats] = useState<{
    id: number;
    name: string;
    stats: PokemonStats[];
    types: PokemonType[];
  }>();

  useEffect(() => {
    const PokemonFetchByNameOrId = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${identification}/`,
      );
      const data = await response.json();
      setPokemonStats(data);
    };

    PokemonFetchByNameOrId();
  }, [showDetails]);

  return (
    <>
      {pokemonStats ? (
        <S.DetailsWrapper>
          <span>Número: {pokemonStats?.id}</span>
          <span>Nome: {pokemonStats?.name}</span>
          {pokemonStats.stats.map((each, index) => {
            return (
              <span key={index}>
                {each.stat.name}: {each.base_stat}
              </span>
            );
          })}
          {pokemonStats.types.map((type, index) => {
            return <span key={index}>{type.type.name}</span>;
          })}
        </S.DetailsWrapper>
      ) : null}
    </>
  );
}
