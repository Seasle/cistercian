import styled from '@emotion/styled';

export type SpaceProps = Partial<{
  gap: number | string;
  direction: 'vertical' | 'horizontal';
  justify: 'start' | 'end' | 'center' | 'normal';
  align: 'start' | 'end' | 'center' | 'normal';
}>;

const toUnit = (value: number | string) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

export const Space = styled.div<SpaceProps>`
  gap: ${({ gap = 8 }) => toUnit(gap)};
  display: flex;
  flex-direction: ${({ direction = 'horizontal' }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  justify-content: ${({ justify = 'normal' }) => justify};
  align-items: ${({ align = 'normal' }) => align};
`;

Space.displayName = 'Space';
