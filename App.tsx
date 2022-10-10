import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
import {Header} from './src/components/Header';
import {SafeAreaView} from 'react-native';
import {RestaurantList} from './src/components/RestaurantList';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantItem} from './src/components/RestaurantItem';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <RestaurantList />
      </SafeAreaView>
    </>
  );
};

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={RestaurantItem} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
