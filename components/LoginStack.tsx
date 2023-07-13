import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Tabs from './Tabs';
import { useState } from 'react';

const Stack = createStackNavigator();


export default function LoginStack() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    
  return (
    <>
        {
            isLoggedIn ?
            <Tabs />
            :
            <LoginScreen />
        }
    </>
  );
}