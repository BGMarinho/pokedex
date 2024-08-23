import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';
import { useState } from 'react';

export interface TypeObj {
  name: string;
  url: string;
}

export default function App() {
  const [searchtext, setSearchText] = useState('');
  const [foundPokemonId, setFoundPokemonId] = useState<number | undefined>();
  const [foundPokemonName, setFoundPokemonName] = useState<
    string | undefined
  >();
  const [types, setTypes] = useState<TypeObj[] | undefined>();
  const [typeName, setTypeName] = useState<string | undefined>();

  return (
    <main>
      <SearchBar
        searchText={searchtext}
        setSearchText={setSearchText}
        foundPokemonId={foundPokemonId}
        setFoundPokemonId={setFoundPokemonId}
        foundPokemonName={foundPokemonName}
        setFoundPokemonName={setFoundPokemonName}
        types={types}
        setTypes={setTypes}
        typeName={typeName}
        setTypeName={setTypeName}
      />
      {searchtext ? (
        foundPokemonId ? (
          <PokemonCard
            foundPokemonId={foundPokemonId}
            foundPokemonName={foundPokemonName}
            typeName={typeName}
            setTypeName={setTypeName}
          />
        ) : null
      ) : (
        <PokemonList typeName={typeName} />
      )}
    </main>
  );
}
