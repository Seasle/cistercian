import styled from '@emotion/styled';
import '@fontsource/lora/400.css';

export type QuoteProps = Partial<unknown>;

export const Quote = styled.blockquote<QuoteProps>`
  position: relative;
  margin: 0;
  padding: 16px;
  border-radius: 4px;
  z-index: 1;

  &::before {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.05;
    z-index: -1;
    content: '';
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 4px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 32px;
    font-family: 'Lora';
    line-height: 1;
    content: '”';
  }

  & > * {
    margin: 0;
  }
`;

Quote.displayName = 'Quote';
