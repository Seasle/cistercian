import styled from '@emotion/styled';

export const Body = styled.div`
  position: relative;
  min-height: calc(100vh - 88px);
  padding: 32px;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndex.body};
`;

Body.displayName = 'Body';
