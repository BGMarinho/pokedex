import { useEffect } from 'react';
import { TypeObj } from '../../App';
import * as S from './styles';

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  foundPokemonId?: number;
  setFoundPokemonId: React.Dispatch<React.SetStateAction<number | undefined>>;
  foundPokemonName?: string;
  setFoundPokemonName: React.Dispatch<React.SetStateAction<string | undefined>>;
  types?: TypeObj[];
  setTypes: React.Dispatch<React.SetStateAction<TypeObj[] | undefined>>;
  typeName?: string;
  setTypeName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function SearchBar({
  searchText,
  setSearchText,
  foundPokemonId,
  setFoundPokemonId,
  foundPokemonName,
  setFoundPokemonName,
  types,
  setTypes,
  typeName,
  setTypeName,
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

  useEffect(() => {
    const PokemonFetchTypes = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/type/`);
      const data = await response.json();
      setTypes(data.results);
    };

    PokemonFetchTypes();
  }, []);

  useEffect(() => {
    const PokemonFetchByTypeName = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${typeName}`,
      );
      const data = await response.json();
      setTypeName(data.name);
    };

    PokemonFetchByTypeName();
  }, [typeName]);

  return (
    <S.SearchBarWrapper>
      <S.SelectType onChange={(e) => setTypeName(e.target.value)}>
        {types?.map((type, index) => {
          return (
            <option key={index} value={type.name}>
              {type.name}
            </option>
          );
        })}
      </S.SelectType>

      <S.SearchTextInput
        type="text"
        placeholder="Pesquise por nome ou número"
        onChange={handleTextChange}
      />
    </S.SearchBarWrapper>
  );
}
