import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type TableProps = Partial<{
  showBorder: boolean;
  showRowBorder: boolean;
  showColumnBorder: boolean;
}>;

export const Table = styled.table<TableProps>`
  border-spacing: 0;

  ${({ theme, showBorder }) =>
    showBorder &&
    css`
      border: 1px solid ${theme.colors.tertiary};
    `}

  ${({ theme, showBorder, showRowBorder = showBorder }) =>
    showRowBorder &&
    css`
      tr {
        &:not(:last-child) {
          th,
          td {
            border-bottom: 1px solid ${theme.colors.tertiary};
          }
        }
      }

      tbody {
        tr {
          &:first-child {
            th,
            td {
              border-bottom: 1px solid ${theme.colors.tertiary};
            }
          }
        }
      }
    `}

  ${({ theme, showBorder, showColumnBorder = showBorder }) =>
    showColumnBorder &&
    css`
      tr {
        th,
        td {
          &:not(:last-child) {
            border-right: 1px solid ${theme.colors.tertiary};
          }
        }
      }
    `}
`;

Table.displayName = 'Table';
