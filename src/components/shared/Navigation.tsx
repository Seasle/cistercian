import styled from '@emotion/styled';
import { HeaderLink } from '@/components/lib/HeaderLink';

const Links = styled.div`
  height: 88px;
  margin: -8px 0;
  display: flex;
`;

export const Navigation = () => {
  return (
    <Links>
      <HeaderLink to="/">Главная</HeaderLink>
      <HeaderLink to="/about">Подробнее</HeaderLink>
      <HeaderLink to="/example">Примеры</HeaderLink>
    </Links>
  );
};
