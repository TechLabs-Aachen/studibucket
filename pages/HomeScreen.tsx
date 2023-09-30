import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../stores/auth";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from "canvaskit-wasm/package.json";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import { query, collectionGroup, getDocs } from "firebase/firestore";
import { groupBy, mapToArray } from "./utils/arrayUtils";
import { Position } from "./CashflowScreen";
import { Section } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";
import { Button } from "react-native-paper";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function HomeScreen() {
  const [user, setUser] = useAuthStore(
    (state) => [state.user, state.setUser],
    shallow
  );

  
  function signOutHandler() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        console.log("Sign out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }


  return (
    <View style={styles.container}>
      
      

      <WithSkiaWeb
        getComponent={() => import("../components/DoughnutCharts")}
        opts={{
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}`,
        }}
        fallback={<Text>Loading Skia...</Text>}
      />

      <TouchableOpacity onPress={signOutHandler}>
        <Button mode= "contained" style ={styles.button}>Log Out</Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-start"
  },
  button: {
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 70,
  },
});
