
import { View } from 'react-native';
import {Canvas, Path} from "@shopify/react-native-skia";
import { List, Text, useTheme } from 'react-native-paper'

type DoughnutChartProps = {
    radius: number,
    arcs: Arc[],
    strokeWidth: number
}

type Arc ={
    startAngleInDegrees: number,
    sweepAngleInDegrees: number,
    color: string,
}

export default function DoughnutCharts() {
    const propObj = {
        radius: 120,
        arcs: [],
        strokeWidth: 10 
    }

   
    return (

      <View style={{height: propObj.radius*3, width: propObj.radius*3, alignSelf:'center', backgroundColor:"red"}}>
        <Canvas style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "blue" }}>

        </Canvas>
      </View>
    );
}