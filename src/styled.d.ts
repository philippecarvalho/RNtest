import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      darkDown: string;
      dark: string;
      darkUp: string;
      white: string;
      lightDown: string;
      light: string;
      lightMedium: string;
      lightUp: string;
    };
  }
}
