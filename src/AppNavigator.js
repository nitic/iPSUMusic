import { createStackNavigator } from 'react-navigation';
import MusicList from './MusicList';
import MusicDetail from './MusicDetail';

export default createStackNavigator(
  {
    List: { screen: MusicList },
    Detail: { screen: MusicDetail }
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