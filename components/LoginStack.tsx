import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Tabs from './Tabs';
import { useEffect, useState } from 'react';
import authFB from '@react-native-firebase/auth';
import shallow from 'zustand/shallow';
import { useAuthStore } from '../stores/auth';
import appFB from '@react-native-firebase/app'


export default function LoginStack() {
  // const token = useAuthStore((state) => state.token )

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const user = useAuthStore((state) => state.user);

  // Handle user state changes
  function onAuthStateChangedFunc(user: any) {
    if (initializing) setInitializing(false);
  }



  
  useEffect(() => {
    const app = appFB.initializeApp(firebaseConfig)
    app.then((value) => {console.log(value)})
    //const subscriber = authFB(app).onAuthStateChanged(onAuthStateChangedFunc);
    //return subscriber; // unsubscribe on unmount
  },[]);

  if (initializing) return null;

    
  return (
    <>
        {
            user !=null ?
            <Tabs />
            :
            <LoginScreen />
        }
    </>
  );
}

function auth() {
  throw new Error('Function not implemented.');
}
