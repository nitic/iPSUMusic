import { createStackNavigator, createAppContainer } from 'react-navigation';
import MusicList from './MusicList';

const AppNavigator = createStackNavigator(
  {
    List: { screen: MusicList }
  },
  {
    initialRouteName: 'List',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff7675',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default createAppContainer(AppNavigator);