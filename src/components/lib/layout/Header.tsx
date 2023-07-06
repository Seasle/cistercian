import styled from '@emotion/styled';

export const Header = styled.div`
  position: sticky;
  top: 0;
  height: 88px;
  gap: 48px;
  padding: 8px 32px;
  box-shadow: 0 2px 0 0 ${({ theme }) => theme.colors.tertiary};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.tertiary};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

Header.displayName = 'Header';
