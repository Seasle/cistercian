import styled from '@emotion/styled';
import '@fontsource/lora/400.css';

export type FancyTextProps = Partial<{
  upper: boolean;
  lower: boolean;
}>;

export const FancyText = styled.span<FancyTextProps>`
  font-family: 'Lora', serif;
  text-transform: ${({ upper }) => upper && 'uppercase'};
  text-transform: ${({ lower }) => lower && 'lowercase'};

  &:first-letter {
    line-height: 1;
    padding: 0 0.25em;
    background-color: ${({ theme }) => theme.colors.primary};

    color: #ffffff;
  }
`;

FancyText.displayName = 'FancyText';
