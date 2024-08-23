import { getPokemonPictureById } from '../../helpers/getPokemonPicture';
import { useState } from 'react';
import * as S from './styles';
import Details from './Details';

interface PokemonCardProps {
  foundPokemonId?: number;
  foundPokemonName?: string;
  typeName?: string;
  setTypeName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function PokemonCard({
  foundPokemonId,
  foundPokemonName,
  typeName,
  setTypeName,
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
        <button className="show-details-button" onClick={handleShowDetails}>
          Detalhes
        </button>
        {showDetails && (
          <Details
            identification={foundPokemonId}
            showDetails={showDetails}
            typeName={typeName}
            setTypeName={setTypeName}
          />
        )}
      </S.PokemonCard>
    </S.PokemonCardWrapper>
  );
}
