import { createStackNavigator } from 'react-navigation';
import MusicList from './MusicList';

export default createStackNavigator(
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