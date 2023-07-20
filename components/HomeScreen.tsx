import { signOut } from 'firebase/auth';
import { auth } from '../firebase'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../stores/auth';
import shallow from 'zustand/shallow';




export default function HomeScreen() {

  const [user, setUser] = useAuthStore((state) => [state.user, state.setUser], shallow )

  function signOutHandle() {
      signOut(auth).then(() => {
        // Sign-out successful.
        setUser(null)
        console.log("Sign out successful")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }

    return(
      <View>
        <Text>This is the HomeSecreen</Text>
        <TouchableOpacity onPress={signOutHandle}><Text>Log Out</Text></TouchableOpacity>
      </View>
    );    
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });