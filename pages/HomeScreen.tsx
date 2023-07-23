import { signOut } from 'firebase/auth';
import { auth } from '../firebase'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../stores/auth';
import AddButton from '../components/AddButton';




export default function HomeScreen() {
  const [user, setUser] = useAuthStore((state) => [state.user, state.setUser])

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
      <View style={styles.container}>
        <Text>This is the HomeSecreen</Text>
        <TouchableOpacity onPress={signOutHandle}><Text>Log Out</Text></TouchableOpacity>
        <Text>{user?.uid}</Text>
        <AddButton></AddButton>  
      </View>
    );    
}



const styles = StyleSheet.create({
  container:{
    height: "100%"
  },
  button: {
    width: "60px",
    height: "60px",
    backgroundColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 180
  },
  text: {
    fontSize: 70
  }
});

