import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useAuthStore } from "../stores/auth";
import { doc, setDoc, arrayUnion } from "firebase/firestore"; 
import { db } from "../firebase";



export default function AddScreen() {
   const [amount, setAmount] = useState("0")
   const user = useAuthStore((state) => state.user )


   function pressHandler(action: "add" | "substitute"){
      
      if(user?.uid){
         if(action == "add"){
         (async()=>{                                                // this method works for async, the name will be added later
               await setDoc(doc(db, "users", user.uid), {
                  income: arrayUnion({amount: amount, timestamp: Date()}),     
               }, { merge: true });
               console.log("debug 1")
         })()
         } else if(action == "substitute"){
            (async()=>{                                                
                  await setDoc(doc(db, "users", user.uid), {
                     expense: arrayUnion({amount: amount, timestamp: Date()}),     
                  }, { merge: true });
                  console.log("debug 2")
            })()
         }    
      }
   }


   
    return (
     <View>
         <Text>enter amount</Text>         
         <TextInput
               value={amount}
               onChangeText={setAmount}
               placeholder='amount'/>  
         <TouchableOpacity style={styles.textInput} onPress={() => pressHandler("add")}><Text>Add Income</Text></TouchableOpacity>   
         <TouchableOpacity style={styles.textInput} onPress={() => pressHandler("substitute")}><Text>Add Expense</Text></TouchableOpacity>     
     </View>
    );
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