import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import StartScreen from './src/screens/StartScreen';
import AddressShow from './src/screens/AddressShow';
import LovedResults from './src/screens/LovedResults';
import { Provider } from './src/context/SavedItemsContext';

const navigator = createStackNavigator({
  Start: StartScreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Address: AddressShow,
  Loved: LovedResults

}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      title: 'Food Fork Drink!'
    }
  });

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};