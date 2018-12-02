import { createStackNavigator } from 'react-navigation';

import { colors } from 'styles';

import Home from './pages/home';
import List from './pages/list';
import Search from './pages/search';
import Detail from './pages/detail';

const rootNavigator = createStackNavigator(
  {
    Home,
    List,
    Search,
    Detail,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: colors.secondary,
      gesturesEnabled: false,
    },
  },
);

export default rootNavigator;
