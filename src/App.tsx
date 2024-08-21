import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { useState } from 'react';

export default function App() {
  const [searchtext, setSearchText] = useState('');

  return (
    <main>
      <section className="header">
        <SearchBar searchText={searchtext} setSearchText={setSearchText} />
      </section>
      <section className="content">
        <PokemonList />
      </section>
    </main>
  );
}
