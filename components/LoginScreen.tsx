
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../stores/auth';
import { shallow } from 'zustand/shallow'


export default function LoginScreen(){


    const [token, setToken] = useAuthStore((state) => [state.token, state.setToken], shallow )



    return(
        <View style={styles.container}>
            <Text>This is a login Screen</Text>

            <TouchableOpacity style={styles.textInput} onPress={() => setToken(null)}>Log In</TouchableOpacity>
            <Text>{token}</Text>        
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