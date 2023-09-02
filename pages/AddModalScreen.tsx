import { DatePickerInput } from "react-native-paper-dates";
import React, { useEffect } from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput as RNTextInput, SectionList, FlatList, Pressable } from "react-native";
import {
  TextInput as RNPTextInput,
  Button,
  IconButton,
  Portal,
  Modal,
  SegmentedButtons,
} from "react-native-paper";
import { List, Text, useTheme } from "react-native-paper";
import Buckets from "../components/Buckets";
import { doc, getDoc, getDocs, collection, addDoc } from "firebase/firestore"
import { db } from "../firebase";
import { useAuthStore } from "../stores/auth";


// ToDo: styling selected bucket  *





export default function AddModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [buckets, setBuckets] = useState<any>([ ])
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [inOut, setInOut] = React.useState("out");
  const [amount, setAmount] = React.useState("0");
  const [selectedBucketID, setSelectedBucketID] = useState("");
  const [inputDate, setInputDate] = React.useState(new Date());
  const [title, setTitle] = React.useState("");
  const user = useAuthStore((state) => state.user);
  const theme = useTheme();


  function pressHandler() {  
    if (user?.uid) {
      (async () => {
        // Self invoked function. This method works for async, the name will be added later
        await addDoc(collection(db, "users", user.uid, "buckets", selectedBucketID, inOut), {
          title,
          amount,
          inputDate,          
        });
        console.log("debug 1");
        hideModal();
      })();
    }
  }

  useEffect(() => {

   // const docRef = doc(db, "users", user!.uid, "buckets");  

    const asycFunc = (async () => {
      const querySnapshot = await getDocs(collection(db, "users", user!.uid, "buckets"));      
      const newBuckets = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data()      

        return {id:doc.id, title: data.title, currentAmount: 0, goalAmount: data.goalAmount, type: "active"}
      });

      setBuckets(newBuckets)
      console.log(buckets)

    }) 

    if(modalVisible) {
      asycFunc()
    } else {
      setAmount("0")
      setInOut("out");
      setTitle("");
      setInputDate(new Date());
      setSelectedBucketID("")
    }
    
  },[modalVisible])







  return (
    <>
      <Portal >
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.content}
          style={styles.modal}
        >
         
         <View style={styles.header}>
          <Text variant="displaySmall">Add</Text>
          <Button mode="contained" onPress={pressHandler} disabled={!selectedBucketID} >
            Save
          </Button>
         </View>
        


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
          
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <DatePickerInput
              locale="en"
              label="Date"
              style={styles.datePicker}
              value={inputDate}
              onChange={(d) => setInputDate(d as Date)}
              inputMode="start"
              mode="outlined"
              withDateFormatInLabel={false}
            />
          </View>

          <RNPTextInput
            mode="outlined"
            placeholder="Give me a title"
            value={title}
            onChangeText={setTitle}
            label="Title"
          ></RNPTextInput>

          <Text variant="displaySmall">Assign to Buckets</Text>

         
          <FlatList
            data={buckets}
            style={styles.flatlist}
            keyExtractor={(item) => item.id}          
            renderItem={({ item }) =>
              <Pressable style={styles.item} onPress={() => setSelectedBucketID(item.id)} >                         
                  <Buckets title={item.title} currentAmount={item.currentAmount} goalAmount={item.goalAmount} date={new Date()} active={item.type=="active"}/>
              </Pressable>                
            }
        />
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
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  modal:{
    justifyContent: "flex-end"
  },
  datePicker:{
    flexGrow: 0
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
  bucket:{
    flex: 1,
    margin: 12,
    gap: 15
  },
  flatlist:{
    flex: 1,
    alignSelf: "stretch"
  },
  item: {
      paddingVertical: 3,
      paddingHorizontal: 8,
      marginHorizontal: 8,
      marginVertical: 4, 
  },
  header:{
    flexDirection:"row",
    alignSelf: "stretch",
    justifyContent:"space-between"
  }
});

// tabBarIcon: ({ color, size }) => {
//   return <Icon name="plus" size={50} color={color} />;
// },
