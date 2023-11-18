import styled from '@emotion/styled';

export type HeadCellProps = Partial<{
  align: 'left' | 'center' | 'right';
}>;

export const HeadCell = styled.th<HeadCellProps>`
  padding: 2px 4px;
  font-weight: 500;
  text-align: ${({ align }) => align};
`;

HeadCell.displayName = 'HeadCell';
