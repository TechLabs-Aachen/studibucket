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

export default function AddModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [inOut, setInOut] = React.useState("out");
  const [amount, setAmount] = React.useState("0");
  const [inputDate, setInputDate] = React.useState(new Date());
  const [title, setTitle] = React.useState("");
  return (
    <>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.content}
        >
          <SegmentedButtons
            value={inOut}
            onValueChange={setInOut}
            buttons={[
              {
                value: "in",
                label: "In",
              },
              {
                value: "out",
                label: "Out",
              },
            ]}
          />
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
        </Modal>
      </Portal>

      <IconButton
        onPress={() => {
          showModal();
          console.log("debug 222");
        }}
        icon="plus"
        mode="contained"
        size={70}
      />
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
