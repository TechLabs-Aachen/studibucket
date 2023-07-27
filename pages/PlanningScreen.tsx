import { StyleSheet, Text, View } from 'react-native';
import Buckets from '../components/Buckets';


export default function PlanningScreen() {
    return(
        <View style={styles.bucket}>
            <Text>This is the Bucket</Text>
            <Buckets title='Vacation' currentAmount={50.00} goalAmount={300.00} date={new Date()} active/>
            <Buckets title='Car' currentAmount={5000.00} goalAmount={10000.00} date={new Date()} active/>
            <Buckets title='Trip to bali' currentAmount={2000.00} goalAmount={2000.00} date={new Date()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    bucket:{
        flex: 1,
        margin: 12,
        gap: 15
    }
}  
)