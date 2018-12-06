import { createStackNavigator, createAppContainer } from 'react-navigation';
import MusicList from './MusicList';
import MusicDetail from './MusicDetail';

const AppNavigator = createStackNavigator(
  {
    List: { screen: MusicList },
    Detail: { screen: MusicDetail}
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
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