import * as S from './styles';

interface DeatilsProps {
  idNumber?: number;
}

export default function Details({ idNumber }: DeatilsProps) {
  return (
    <>
      <span>Número: {idNumber}</span>
      <p>Não achei os outros stats na API :/</p>
    </>
  );
}
