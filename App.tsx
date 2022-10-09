import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
import {Header} from './src/components/Header';
import {SafeAreaView} from 'react-native';
import {RestaurantList} from './src/components/RestaurantList';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{flex: 1}}>
            <Header />
            <RestaurantList />
          </SafeAreaView>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
