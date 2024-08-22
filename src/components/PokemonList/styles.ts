import styled from 'styled-components';

export const PokemonListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`;

export const PokemonList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  justify-content: center;
  grid-column-gap: 100px;
  grid-row-gap: 50px;
`;
