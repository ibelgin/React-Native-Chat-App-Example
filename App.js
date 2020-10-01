import {createAppContainer ,ThemeColors} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import LogoScreen from './screens/LogoScreen';
import 'react-native-gesture-handler'

const AppNavigator = createStackNavigator(
  {
    Login:{
      screen:LoginScreen,
      navigationOptions:{
        headerShown:true,
      }
    },
    Chat:{
      screen:ChatScreen,
    navigationOptions:{
      headerShown:true
    }},
    Logo:{
      screen:LogoScreen,
      navigationOptions:{
        headerShown:false,
      }
    },
  },
  {
    initialRouteName:"Logo",
    navigationOptions: {
      gesturesEnabled: true,
      gestureDirection:"vertical",
    },
    headerMode:"screen",
  }
)

export default createAppContainer(AppNavigator);