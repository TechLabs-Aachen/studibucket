import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import PlanningScreen from "../pages/BucketsScreen";
import GroupScreen from "../pages/GroupScreen";
import { View, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import AppStack from "../pages/AppStack";
import CashflowScreen from "../pages/CashflowScreen";
import { BottomNavigation, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AddButton from "./AddButton";
import AddModalScreen from "../pages/AddModalScreen";
import { List, Text, useTheme } from "react-native-paper";
import AddBucketModalScreen from "../pages/AddBucketModalScreen";
import BucketsScreen from "../pages/BucketsScreen";
import AddBucketButton from "./AddBucketButton";

const PayScreenComponent = () => {
  return null;
};

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const theme = useTheme();

  function pressHandler() {}

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          header: ({ navigation, route, options }) => (
            <View style={styles.header}>
              <Text variant="headlineMedium" style={{ fontWeight: "600" }}>
                {route.name}
              </Text>
              {route.name == "Buckets" ? <AddBucketModalScreen /> : null}
            </View>
          ),
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            style={{ backgroundColor: theme.colors.primary }}
            navigationState={state}
            // getColor={({route}) => route.color }
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.navigate(route.name, route.params);
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              } else if (route.name == "Add") return;
              // else if(options.tabBarButton){
              //   return options.tabBarButton( { color, size: 24 })
              // }

              return null;
            }}
            renderTouchable={(props) => {
              const { options } = descriptors[props.route.key];
              // if (options.tabBarIcon) {
              //   return options.tabBarIcon({ focused: true , color: "white", size: 24 });
              // }
              if (options.tabBarButton) {
                return options.tabBarButton({ children: null });
              } else {
                return <TouchableOpacity {...props} />;
              }
            }}
            renderLabel={({ route, focused, color }) => {
              return (
                <Text
                  style={{ color: theme.colors.onPrimary, textAlign: "center" }}
                >
                  {route.name}
                </Text>
              );
            }}
            // getLabelText={({ route }) => {
            //   if(route.name != "Add"){
            //     return route.name;
            //   }
            // }}
          />
        )}
      >
        <Tab.Screen
          name="Home"
          component={() => <AppStack mainScreen={HomeScreen} />}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon name="home" size={size} color={theme.colors.onPrimary} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cashflow"
          component={() => <AppStack mainScreen={CashflowScreen} />}
          options={{
            tabBarLabel: "Cashflow",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  name="cash-fast"
                  size={size}
                  color={theme.colors.onPrimary}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Add"
          component={() => null}
          options={{
            tabBarButton: () => <AddModalScreen></AddModalScreen>,
          }}
        />
        <Tab.Screen
          name="Buckets"
          component={() => <AppStack mainScreen={BucketsScreen} />}
          options={{
            tabBarLabel: "Plannig",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  name="calendar-month"
                  size={size}
                  color={theme.colors.onPrimary}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Group"
          component={() => <AppStack mainScreen={GroupScreen} />}
          options={{
            tabBarLabel: "Group",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  name="account-group"
                  size={size}
                  color={theme.colors.onPrimary}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
});

// tabBarIcon: ({ color, size }) => {
//   return <Icon name="plus" size={50} color={color} />;
// },
