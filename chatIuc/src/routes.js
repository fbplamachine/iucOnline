import {createStackNavigator} from 'react-navigation';
import Home from './pages/home/index';

const Routes = createStackNavigator({
    Home: {screen: HomePage},
});

export default Routes;