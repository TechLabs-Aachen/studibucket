import { StatusBar } from 'expo-status-bar';
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




