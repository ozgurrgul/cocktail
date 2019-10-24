import React from 'react';
/* redux stuff */
import { Provider } from 'react-redux';
import store from "./app/store";

/* navigation stuff */
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen';
import CocktailFinderScreen from './app/screens/CocktailFinderScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  CocktailFinderScreen: {
    screen: CocktailFinderScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>)
};

export default App;
