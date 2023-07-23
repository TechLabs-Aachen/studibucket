import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from './AddScreen';


const Stack = createStackNavigator();


type AppStackProps = {
  mainScreen: React.FC
}



export default function AppStack(props: AppStackProps) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={props.mainScreen}/>
      <Stack.Screen name="AddScreen" component={AddScreen} />     
    </Stack.Navigator>
  );
}