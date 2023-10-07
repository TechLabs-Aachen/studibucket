import { DatePickerInput } from "react-native-paper-dates";
import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput as RNTextInput } from "react-native";
import {
  TextInput as RNPTextInput,
  Button,
  IconButton,
  Portal,
  Modal,
  SegmentedButtons,
} from "react-native-paper";
import { List, Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuthStore } from "../stores/auth";

export default function AddBucketModalScreen() {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [inOut, setInOut] = React.useState("out");
  const [amount, setAmount] = React.useState("0");
  const [inputDate, setInputDate] = React.useState(new Date());
  const [title, setTitle] = React.useState("");
  const user = useAuthStore((state) => state.user);

  function pressHandler() {
    if (user?.uid) {
      (async () => {
        // Self invoked function. This method works for async, the name will be added later
        await addDoc(collection(db, "users", user.uid, "buckets"), {
          title,
          inputDate,
          amount,
        });
        console.log("debug 1");
        hideModal();
      })();
    }
  }

  return (
    <>
      <Button mode="contained" onPress={showModal} disabled={false}>
        <Icon name="plus" size={24} color={theme.colors.onPrimary} />
      </Button>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.content}
          style={styles.modal}
        >
          <Text variant="displayMedium">Amount</Text>
          <RNTextInput
            value={amount}
            onChangeText={setAmount}
            style={styles.amountText}
          />
          <DatePickerInput
            locale="en"
            label="Date"
            value={inputDate}
            onChange={(d) => setInputDate(d as Date)}
            inputMode="start"
            mode="outlined"
            withDateFormatInLabel={false}
          />
          <RNPTextInput
            mode="outlined"
            placeholder="Give me a title"
            value={title}
            onChangeText={setTitle}
            label="Title"
          ></RNPTextInput>
          <Button mode="contained" onPress={pressHandler}>
            Save
          </Button>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  amountText: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 30,
    outlineStyle: "none",
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    gap: 15,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  modal: {
    justifyContent: "flex-end",
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 100,
    padding: 100,
    zIndex: 100,
  },
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: "grey",
    borderRadius: 100,
  },
});

// tabBarIcon: ({ color, size }) => {
//   return <Icon name="plus" size={50} color={color} />;
// },
