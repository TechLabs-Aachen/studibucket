import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, IconButton, Portal, Modal } from "react-native-paper";
import { List, Text, useTheme } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export default function AddModalScreen() {

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <>
       
          <Portal >  
            <Modal                 
                visible={modalVisible}  
                onDismiss={hideModal} 
                contentContainerStyle={styles.content}>
                <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>       
          </Portal>
          
          <IconButton 
                onPress={() => {showModal(); console.log("debug 222")}} 
                icon="plus"
                mode="contained"
                size={70}
                style={styles.addButton}
            />  
        
        </>        
  );
}


const styles = StyleSheet.create({
    addButton:{
        
    },
    content: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 17,
      borderTopLeftRadius: 17,
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 12,
    },
    contentView: {
      justifyContent: 'flex-end',
      margin: 100,
      padding: 100,
      zIndex:100
    },
      buttonStyle: {
      height: 90,
      width: 90,
      backgroundColor: "grey",
      borderRadius: 100
    }
  });

// tabBarIcon: ({ color, size }) => {
//   return <Icon name="plus" size={50} color={color} />;
// },