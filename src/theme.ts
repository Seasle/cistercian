import type { Theme } from '@/types/theme';

const theme: Theme = {
  colors: {
    primary: '#ff0044',
    secondary: '#ffffff',
    tertiary: '#101010',
  },
  transitions: {
    duration: '0.25s',
    easing: 'ease-in-out',
  },
  zIndex: {
    header: 2,
    body: 1,
  },
};

export default theme;
