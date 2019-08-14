import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import StartScreen from './src/screens/StartScreen';
import AddressShow from './src/screens/AddressShow';

const navigator = createStackNavigator({
  Start: StartScreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Address: AddressShow
}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      title: 'Food Fork Drink!'
    }
  });

export default createAppContainer(navigator);