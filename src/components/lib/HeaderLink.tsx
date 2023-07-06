import styled from '@emotion/styled';
import { NavLink as InternalNavLink } from 'react-router-dom';

export const HeaderLink = styled(InternalNavLink)`
  position: relative;
  padding: 0 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &::after {
    position: absolute;
    top: calc(100% - 2px);
    left: 0%;
    width: 0%;
    height: 6px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition-property: width;
    transition-duration: ${({ theme }) => theme.transitions.duration};
    transition-timing-function: ${({ theme }) => theme.transitions.easing};
    content: '';
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

HeaderLink.displayName = 'HeaderLink';
