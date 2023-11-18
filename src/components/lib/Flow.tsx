import styled from '@emotion/styled';

export type FlowProps = Partial<{
  gap: number;
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  align: 'start' | 'center' | 'end';
}>;

export const Flow = styled.div<FlowProps>`
  gap: ${({ gap = 8 }) => `${gap}px`};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

Flow.displayName = 'Flow';
