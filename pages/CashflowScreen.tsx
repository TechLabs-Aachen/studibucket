import { useEffect } from 'react';
import { StyleSheet, View, FlatList, SectionList } from 'react-native';
import { doc, getDoc } from "firebase/firestore";
import { useAuthStore } from '../stores/auth';
import { db } from '../firebase';
import { List, useTheme, Text } from 'react-native-paper'
import Month from '../components/Month';
import AddButton from '../components/AddButton';

// ToDo's:
// Sort data by income and expense (income above)



const julyData = [
    {
        id: '1',
        title: "BAföG",
        money: 600,
        type: "income"
    },
    {
        id: '2',
        title: "electricity",
        money: -30,
        type: "expense"
    },
    {
        id: '10',
        title: "wifi",
        money: -30,
        type: "expense"
    },
    {
        id: '13',
        title: "tutoring",
        money: -30,
        type: "income"
    },
];

const juneData = [
    {
        id: '3',
        title: "BAföG",
        money: 600,
        type: "income"
    },
    {
        id: '4',
        title: "electricity",
        money: -30,
        type: "expense"
    },
];

const augustData = [
    {
        id: '5',
        title: "BAföG",
        money: 600,
        type: "income"
    },
    {
        id: '6',
        title: "electricity",
        money: -30,
        type: "expense"
    },
];

const DATA = [
    {
        title: "July",
        data: julyData,
    },
    {
        title: 'June',
        data: juneData,
    },
    {
        title: 'August',
        data: augustData,
    },
];



export default function CashflowScreen() {
    const user = useAuthStore((state) => state.user)
    const theme = useTheme();

    useEffect(() => {
        if (user?.uid) {
            const docRef = doc(db, "users", user.uid);
            (async () => {                                            // Self invoking function; in useEffect we cannot have await 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            })();
        }
    }, [])

    return (
        <View  style={styles.container}>      
            <SectionList
                sections={DATA}
                keyExtractor={(item) => item.id}
                renderSectionHeader={({ section: { title } }) => (
                    <Text variant="titleMedium" style={{ color: theme.colors.primary, fontWeight: "700", marginHorizontal: 15, marginTop: 20 }}>{title}</Text>
                )}
                renderItem={({ item }) =>
                    <List.Item
                        style={[styles.item, item.type == "income" && { backgroundColor: theme.colors.primary }]}
                        titleStyle={item.type == "income" ? { color: theme.colors.onPrimary } : { color: theme.colors.primary }}
                        title={item.title}
                        left={() => <List.Icon
                            color={item.type == "income" ? theme.colors.onPrimary : theme.colors.primary}
                            icon={item.type == "income" ? "plus" : "minus"} />}
                        right={() => <Text
                            style={item.type == "income" ? { color: theme.colors.onPrimary } : { color: theme.colors.primary }}
                            variant="titleMedium">
                            {item.money} €
                        </Text>
                        }
                    />
                }
            />
           
         </View>
    );
}


const styles = StyleSheet.create({
    container:{
        height: "100%",
    },
    item: {
        borderRadius: 8,
        paddingVertical: 3,
        paddingHorizontal: 8,
        marginHorizontal: 8,
        marginVertical: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7
    },

})

