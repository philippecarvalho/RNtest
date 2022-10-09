import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{/* App */}</ThemeProvider>
    </NavigationContainer>
  );
}
