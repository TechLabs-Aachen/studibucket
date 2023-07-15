import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './components/LoginStack';



export default function App() {

  return (
    <NavigationContainer>

          <StatusBar style="auto" />
          <LoginStack />

    </NavigationContainer>
  );
}




