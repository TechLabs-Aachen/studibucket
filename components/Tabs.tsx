import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../pages/SettingsScreen';
import HomeScreen from '../pages/HomeScreen';
import PlanningScreen from '../pages/PlanningScreen';
import GroupScreen from '../pages/GroupScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CashFlow" component={SettingsScreen} />
      <Tab.Screen name="Planning" component={PlanningScreen} />
      <Tab.Screen name="Groups and Friends" component={GroupScreen} />
    </Tab.Navigator>
  );
}

