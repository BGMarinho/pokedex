import { getPokemonPictureById } from '../../helpers/getPokemonPicture';
import { useState } from 'react';
import * as S from './styles';
import Details from './Details';

interface PokemonCardProps {
  foundPokemonId?: number;
  foundPokemonName?: string;
}

export default function PokemonCard({
  foundPokemonId,
  foundPokemonName,
}: PokemonCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const handleShowDetails = () => setShowDetails(!showDetails);
  return (
    <S.PokemonCardWrapper>
      <S.PokemonCard>
        <img
          src={getPokemonPictureById(foundPokemonId)}
          alt={foundPokemonName}
        />
        <p>{foundPokemonName}</p>
        <button onClick={handleShowDetails}>Detalhes</button>
        {showDetails && (
          <Details identification={foundPokemonId} showDetails={showDetails} />
        )}
      </S.PokemonCard>
    </S.PokemonCardWrapper>
  );
}
