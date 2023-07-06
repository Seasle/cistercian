import styled from '@emotion/styled';
import { Link as InnerLink } from 'react-router-dom';

export const Link = styled(InnerLink)`
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: none;
  text-decoration-skip-ink: auto;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
