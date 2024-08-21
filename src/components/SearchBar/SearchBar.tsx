import { useEffect } from 'react';

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  foundPokemonId?: number;
  setFoundPokemonId: React.Dispatch<React.SetStateAction<number | undefined>>;
  foundPokemonName?: string;
  setFoundPokemonName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function SearchBar({
  searchText,
  setSearchText,
  foundPokemonId,
  setFoundPokemonId,
  foundPokemonName,
  setFoundPokemonName,
}: SearchBarProps) {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const PokemonFetchByNameOrId = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchText}/`,
      );
      const data = await response.json();
      setFoundPokemonId(data.id);
      setFoundPokemonName(data.name);
    };

    PokemonFetchByNameOrId();
  }, [searchText]);

  return (
    <div>
      {/* <select value={} onChange={}></select> */}

      <input
        type="text"
        placeholder="Pesquise por nome ou número"
        onChange={handleTextChange}
      />
    </div>
  );
}
