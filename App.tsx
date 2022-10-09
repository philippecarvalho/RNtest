import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
import {Header} from './src/components/Header';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
}
