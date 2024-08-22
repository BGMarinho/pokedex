import styled from 'styled-components';

export const PokemonCardWrapper = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  border: 1px solid black;
  border-radius: 2%;
  width: 200px;
  [class*='show-details-button'] {
    all: unset;
    margin-bottom: 20px;
  }
`;
