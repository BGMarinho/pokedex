import * as S from './styles';
import { useEffect } from 'react';

interface DetailsProps {
  idNumber?: number;
  name?: string;
}

export default function Details({ idNumber, name }: DetailsProps) {
  useEffect(() => {}, []);

  return (
    <S.DetailsWrapper>
      <span>Número: {idNumber}</span>
      <span>Nome: {name}</span>
    </S.DetailsWrapper>
  );
}
