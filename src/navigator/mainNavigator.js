import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial96074Navigator from '../features/Tutorial96074/navigator';
import NotificationList96046Navigator from '../features/NotificationList96046/navigator';
import Settings96045Navigator from '../features/Settings96045/navigator';
import Settings96037Navigator from '../features/Settings96037/navigator';
import UserProfile96035Navigator from '../features/UserProfile96035/navigator';
import UserProfile96003Navigator from '../features/UserProfile96003/navigator';
import Tutorial96002Navigator from '../features/Tutorial96002/navigator';
import NotificationList95974Navigator from '../features/NotificationList95974/navigator';
import Settings95973Navigator from '../features/Settings95973/navigator';
import Settings95965Navigator from '../features/Settings95965/navigator';
import UserProfile95963Navigator from '../features/UserProfile95963/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial96074: { screen: Tutorial96074Navigator },
NotificationList96046: { screen: NotificationList96046Navigator },
Settings96045: { screen: Settings96045Navigator },
Settings96037: { screen: Settings96037Navigator },
UserProfile96035: { screen: UserProfile96035Navigator },
UserProfile96003: { screen: UserProfile96003Navigator },
Tutorial96002: { screen: Tutorial96002Navigator },
NotificationList95974: { screen: NotificationList95974Navigator },
Settings95973: { screen: Settings95973Navigator },
Settings95965: { screen: Settings95965Navigator },
UserProfile95963: { screen: UserProfile95963Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
