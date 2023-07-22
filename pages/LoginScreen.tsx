
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../stores/auth';
import { shallow } from 'zustand/shallow';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { useEffect, useState } from 'react';

export default function LoginScreen(){
    const [user, setUser] = useAuthStore((state) => [state.user, state.setUser], shallow )
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function anonymus() {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          setLoading(false)
          setUser(userCredential.user)
              })
              .catch((error) => {
                console.log(error)
                setLoading(false)
                // ...
        });
      }

      useEffect(() =>{
        const unsubsrcibe = auth.onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
          }
        });
        return unsubsrcibe 
      },[])

    return(
        <View style={styles.container}>
            <Text>This is a login Screen</Text>
            <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder='email'/> 
            <TextInput 
            value={password}
            onChangeText={setPassword}
            placeholder='passwort'
            secureTextEntry /> 
            <TouchableOpacity style={styles.textInput} onPress={() => anonymus()} disabled={loading}><Text>Log In</Text></TouchableOpacity>
            <Text>{user?.displayName}</Text>        
        </View>
        
    )
}




const styles = StyleSheet.create({
    textInput:{
      borderColor: "black",
      height:40,
      borderWidth: 2,
      borderRadius: 5,
      padding: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#ff10',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });