import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../stores/auth";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from "canvaskit-wasm/package.json";
import { shallow } from "zustand/shallow";

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
      <Text>This is the Home Screen</Text>

      <WithSkiaWeb
        getComponent={() => import("../components/DoughnutCharts")}
        opts={{
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}`,
        }}
        fallback={<Text>Loading Skia...</Text>}
      />

      <TouchableOpacity onPress={signOutHandler}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      <Text>{user?.uid}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    left: 180,
  },
  text: {
    fontSize: 70,
  },
});

// <WithSkiaWeb
//         getComponent={() => {

//           function doughnutCharts(){
//             const propObj = {
//               radius: 120,
//               arcs: [],
//               strokeWidth: 10           }

//           return (
//             <View style={{height: propObj.radius*3, width: propObj.radius*3, alignSelf:'center', backgroundColor:"red"}}>
//               <Canvas style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "blue" }}>
//               </Canvas>
//             </View>
//           );
//           }

//           const defaultExport = {default: doughnutCharts as ComponentType}

//           const result = new Promise<{default: ComponentType}>((resolve, reject)=> {
//             resolve(defaultExport)
//           })

//           return result

//         }}
//         fallback={<Text>Loading Skia...</Text>}
//       />

{
  /* <WithSkiaWeb
opts={{ locateFile: (file) => `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}` }}
getComponent={() => import("../components/DoughnutCharts")}
/> */
}
