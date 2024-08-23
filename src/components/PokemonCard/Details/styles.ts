import styled, { css } from 'styled-components';

export const DetailsWrapper = styled.div<{ typeName: string | undefined }>`
  justify-self: flex-start;
  align-self: start;
  padding: 15px 0px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 2%;
  width: 100%;
  z-index: 0;
  ${({ typeName }) => {
    switch (typeName) {
      case 'normal':
        return css`
          background-color: #f5f5dc;
        `;
      case 'fighting':
        return css`
          background-color: #ffdab9;
        `;
      case 'flying':
        return css`
          background-color: #c0c0c0;
        `;
      case 'poison':
        return css`
          background-color: #800080;
        `;
      case 'ground':
        return css`
          background-color: #b26600;
        `;
      case 'rock':
        return css`
          background-color: #7b3f00;
        `;
      case 'bug':
        return css`
          background-color: #f5f5dc;
        `;
      case 'ghost':
        return css`
          background-color: #b0c4de;
        `;
      case 'steel':
        return css`
          background-color: #a9a9a9;
        `;
      case 'fire':
        return css`
          background-color: #f4a460;
        `;
      case 'water':
        return css`
          background-color: #a9cce3;
        `;
      case 'grass':
        return css`
          background-color: #90ee90;
        `;
      case 'electric':
        return css`
          background-color: #f0e68c;
        `;
      case 'psychic':
        return css`
          background-color: #d2b4de;
        `;
      case 'ice':
        return css`
          background-color: #336699;
        `;
      case 'dragon':
        return css`
          background-color: #d2b48c;
        `;
      case 'dark':
        return css`
          background-color: #9370db;
        `;
      case 'fairy':
        return css`
          background-color: #f2c2b7;
        `;
      case 'stellar':
        return css`
          background-color: #c8a2c8;
        `;
      case 'unknown':
        return css`
          background-color: #708090;
        `;
      case undefined:
        return css`
          background-color: #ffffff;
        `;
    }
  }}
`;

export const TypeButton = styled.button`
  all: unset;
  cursor: pointer;
`;
