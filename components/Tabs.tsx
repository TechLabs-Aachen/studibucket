import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import PlanningScreen from '../pages/PlanningScreen';
import GroupScreen from '../pages/GroupScreen';
import { View, StyleSheet } from 'react-native';
import AppStack from '../pages/AppStack';
import CashflowScreen from '../pages/CashflowScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {  
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={() => <AppStack mainScreen={HomeScreen}/>} />
        <Tab.Screen name="Cashflow" component={() => <AppStack mainScreen={CashflowScreen}/>} />
        <Tab.Screen name="Planning" component={() => <AppStack mainScreen={PlanningScreen}/>} />
        <Tab.Screen name="Group" component={() => <AppStack mainScreen={GroupScreen}/>} />             
        </Tab.Navigator>       
    </View>   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});