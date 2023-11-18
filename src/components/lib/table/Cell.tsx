import styled from '@emotion/styled';

export type CellProps = Partial<{
  align: 'left' | 'center' | 'right';
}>;

export const Cell = styled.td<CellProps>`
  padding: 2px 4px;
  text-align: ${({ align }) => align};
`;

Cell.displayName = 'Cell';
