import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { useState } from 'react';

export default function App() {
  const [searchtext, setSearchText] = useState('');
  const [foundPokemonId, setFoundPokemonId] = useState<number | undefined>();
  const [foundPokemonName, setFoundPokemonName] = useState<
    string | undefined
  >();

  return (
    <main>
      <section className="header">
        <SearchBar
          searchText={searchtext}
          setSearchText={setSearchText}
          foundPokemonId={foundPokemonId}
          setFoundPokemonId={setFoundPokemonId}
          foundPokemonName={foundPokemonName}
          setFoundPokemonName={setFoundPokemonName}
        />
      </section>
      <section className="content">{!searchtext && <PokemonList />}</section>
    </main>
  );
}
