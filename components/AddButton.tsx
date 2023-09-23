import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { useContext } from "react";

export default function AddButton() {
  const navigation = useContext(NavigationContext);

  function goToAddScreen() {
    navigation!.navigate("AddScreen");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={goToAddScreen}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    bottom: -10,
    zIndex: 10,
    left: 170,
  },
  text: {
    fontSize: 70,
  },
});
