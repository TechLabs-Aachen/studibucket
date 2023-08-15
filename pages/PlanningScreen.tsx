import { StyleSheet, SectionList, View  } from 'react-native';
import { List, useTheme, Text } from 'react-native-paper'
import Buckets from '../components/Buckets';




const activeBucketsData = [
    {
        id: '1',
        title: "Vacation",
        currentAmount: 50,
        goalAmount: 300.00, 
        type: "active"
    },
    {
        id: '2',
        title: "Car",
        currentAmount: 5000.00,
        goalAmount: 10000.00, 
        type: "active"
    },
];

const passiveBucketsData = [
    {
        id: '3',
        title: "Trip to Bali",
        currentAmount: 1000.00,
        goalAmount: 2000.00, 
        type: "passive"
    },
];


const DATA = [
    {
        title: "Active Buckets",
        data: activeBucketsData,
    },
    {
        title: 'Past Buckets',
        data: passiveBucketsData,
    },
];




export default function PlanningScreen() {
    const theme = useTheme();

    return(
        <SectionList
            sections={DATA}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section: { title } }) => (
                <Text variant="titleLarge" style={{ color: theme.colors.primary, fontWeight: "800", marginHorizontal: 15, marginTop: 20 }}>{title}</Text>
            )}
            renderItem={({ item }) =>
                <View style={styles.item}>
                    <Buckets title={item.title} currentAmount={item.currentAmount} goalAmount={item.goalAmount} date={new Date()} active={item.type=="active"}/>
                </View>
                
            }
        />
    );
}

const styles = StyleSheet.create({
    bucket:{
        flex: 1,
        margin: 12,
        gap: 15
    },
    item: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        marginHorizontal: 8,
        marginVertical: 4, 
    },
})




