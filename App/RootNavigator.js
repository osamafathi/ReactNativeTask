import { StackNavigator } from 'react-navigation';

import App from '../App';
import Login from './LoginPage';
import Register from './RegisterPage'
import Orders from './OrderPage'
const RootNavigator = StackNavigator({
   
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      }
    },
    Register: {
        screen: Register,
        navigationOptions: {
          title: 'Register'
        }
    },
    Orders:{
        screen:Orders,
        navigationOptions:{
            title:'Orders'
        }
    }
    // AddTask: {
    //     screen: AddTask,
    //     navigationOptions: {
    //       title: 'Add New Task'
    //     }
    // }
  
  });
  
  export default RootNavigator;