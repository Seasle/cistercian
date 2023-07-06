export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  transitions: {
    duration: string;
    easing: string;
  };
  zIndex: {
    header: number;
    body: number;
  };
}
