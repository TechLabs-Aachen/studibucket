import { useEffect } from 'react';
import { Text } from 'react-native';
import { doc, getDoc } from "firebase/firestore";
import { useAuthStore } from '../stores/auth';
import { db } from '../firebase';


export default function CashflowScreen() {    
    const user = useAuthStore((state) => state.user )

    useEffect(()=>{
        if(user?.uid){  const docRef = doc(db, "users", user.uid);   // Self invoking function; in useEffect we cannot have await
        (async()=> {             
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");}})()            
         }        
    },[])

    return(
        <Text>This is the Setting</Text>
    );
}

