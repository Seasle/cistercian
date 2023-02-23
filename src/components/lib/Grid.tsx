import styled from '@emotion/styled';

export const Grid = styled.div`
  gap: 32px;
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  justify-items: center;
`;

Grid.displayName = 'Grid';
