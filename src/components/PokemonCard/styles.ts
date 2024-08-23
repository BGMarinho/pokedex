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

  border-radius: 2%;
  [class*='show-details-button'] {
    all: unset;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
