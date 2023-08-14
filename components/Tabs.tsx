import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import PlanningScreen from '../pages/PlanningScreen';
import GroupScreen from '../pages/GroupScreen';
import { View, StyleSheet } from 'react-native';
import AppStack from '../pages/AppStack';
import CashflowScreen from '../pages/CashflowScreen';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {  
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
          safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
              navigation.navigate(
                  route.name, route.params,
                );
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              return route.name;
            }}
          />
        )}
      >


        <Tab.Screen 
          name="Home" 
          component={() => <AppStack mainScreen={HomeScreen}/>} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}/>
        <Tab.Screen 
          name="Cashflow" 
          component={() => <AppStack mainScreen={CashflowScreen}/>} 
          options={{
            tabBarLabel: 'Cashflow',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cash-fast" size={size} color={color} />;
            },
          }}/>
        <Tab.Screen 
          name="Planning" 
          component={() => <AppStack mainScreen={PlanningScreen}/>}   
          options={{
            tabBarLabel: 'Plannig',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="calendar-month" size={size} color={color} />;
            },
          }}/>
        <Tab.Screen 
          name="Group" 
          component={() => <AppStack mainScreen={GroupScreen}/>} 
          options={{
            tabBarLabel: 'Group',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="account-group" size={size} color={color} />;
            },
          }}/>
      </Tab.Navigator>       
    </View>   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
