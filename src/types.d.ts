import '@emotion/react';
import { Theme as AppTheme } from '@/types/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}