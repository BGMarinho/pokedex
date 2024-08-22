import { getPokemonPictureById } from '../../helpers/getPokemonPicture';
import * as S from './styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';

interface PokemonCardProps {
  foundPokemonId?: number;
  foundPokemonName?: string;
}

export default function PokemonCard({
  foundPokemonId,
  foundPokemonName,
}: PokemonCardProps) {
  return (
    <Router>
      <S.PokemonCardWrapper>
        <img
          src={getPokemonPictureById(foundPokemonId)}
          alt={foundPokemonName}
        />
        <p>{foundPokemonName}</p>
        <Link to={`/${foundPokemonName}`}>Detalhes</Link>
        <Routes>
          <Route
            path={`/${foundPokemonName}`}
            element={<Details idNumber={foundPokemonId} />}
          />
        </Routes>
      </S.PokemonCardWrapper>
    </Router>
  );
}
