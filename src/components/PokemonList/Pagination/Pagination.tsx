import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ page, setPage }: PaginationProps) {
  const increasePage = () => setPage(page + 1);
  const decreasePage = () => setPage(page - 1);
  return (
    <S.PaginationWrapper>
      <button disabled={page <= 0} onClick={decreasePage}>
        <img src={leftArrow} alt="voltar" width={16} height={16} />
      </button>
      <p>{page + 1}</p>
      <button onClick={increasePage}>
        <img src={rightArrow} alt="avançar" width={16} height={16} />
      </button>
    </S.PaginationWrapper>
  );
}
