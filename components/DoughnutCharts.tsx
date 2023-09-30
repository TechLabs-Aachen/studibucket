import { View, Text, StyleSheet } from "react-native";
import {
  Canvas,
  Circle,
  Group,
  Path,
  Skia,
  point,
  rect,
  translate,
} from "@shopify/react-native-skia";
import { query, collectionGroup, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useTheme } from "react-native-paper";
import shallow from "zustand/shallow";
import { db } from "../firebase";
import { Position } from "../pages/CashflowScreen";
import { groupBy, mapToArray } from "../pages/utils/arrayUtils";
import { useAuthStore } from "../stores/auth";

type DoughnutChartProps = {
  radius: number;
  arcs: Arc[];
  strokeWidth: number;
};

type Arc = {
  startAngleInDegrees: number;
  sweepAngleInDegrees: number;
  color: string;
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function DoughnutCharts() {
  const theme = useTheme();
  const [user, setUser] = useAuthStore(
    (state) => [state.user, state.setUser],
    shallow
  );

  const [cashFlowPositions, setCashFlowPositions] = useState<any>([]);
  const cashFlowSectionsMap = groupBy<string, Position>(cashFlowPositions, (i) => i.sectionKey) 
  const cashFlowSectionsArray = mapToArray(cashFlowSectionsMap, (k, v) => {
    return ({
      title: k,
      data: v,
  }) })

  const inputMonth = new Date().getMonth();
  const inputYear = new Date().getFullYear();
  const currenMonthSectionKey = `${inputYear} ${months[inputMonth]}`
  const currentMonthPositions = cashFlowSectionsArray.find(section => section.title === currenMonthSectionKey)
  const currentIn = currentMonthPositions?.data.filter(item => item.type === "in").reduce((acc, cur) => acc + Number(cur.money), 0)
  const currentOut = currentMonthPositions?.data.filter(item => item.type === "out").reduce((acc, cur) => acc + Number(cur.money), 0)
  const actualIn = currentIn !== undefined ? currentIn : 0
  const actualOut = currentOut !== undefined ? currentOut : 0
  const actualTotal = actualIn + actualOut

  console.log(currentIn, currentOut)

  useEffect(() => {

    const asyncFunc = async () => {
      const income = query(collectionGroup(db, 'in'));
      const expenses = query(collectionGroup(db, 'out'));
      const queryIncomeSnapshot = await getDocs(income);
      const queryExpensesSnapshot = await getDocs(expenses);
      

      const newIncomePositions = queryIncomeSnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        const inputDate = data.inputDate.toDate();
        const inputMonth = inputDate.getMonth();
        const inputYear = inputDate.getFullYear();

        const sectionKey = `${inputYear} ${months[inputMonth]}`
        const position = {id: doc.id, title: data.title, money: data.amount, inputDate: data.inputDate, sectionKey, type: "in"}
        return position;
      })

      const newExpensesPositions = queryExpensesSnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        const inputDate = data.inputDate.toDate();
        const inputMonth = inputDate.getMonth();
        const inputYear = inputDate.getFullYear();

        const sectionKey = `${inputYear} ${months[inputMonth]}`
        const position = {id: doc.id, title: data.title, money: data.amount, inputDate: data.inputDate, sectionKey, type: "out"}
        return position;
      })

      const newPositions = newIncomePositions.concat(newExpensesPositions);


        console.log("newPositions", newPositions);
        setCashFlowPositions(newPositions);
    };

    if (user?.uid) {
      asyncFunc();
    }
  }, []);
  
  const arc1: Arc = {
    startAngleInDegrees: 30,
    sweepAngleInDegrees: 360*actualIn/actualTotal,
    color: theme.colors.primary,
  };

  const arc2: Arc = {
    startAngleInDegrees: 30 + 360*actualIn/actualTotal,
    sweepAngleInDegrees: 360*actualOut/actualTotal,
    color: theme.colors.error,
  };

  const propObj = {
    radius: 120,
    arcs: [arc1, arc2],
    strokeWidth: 10,
  };

  const rc = rect(
    propObj.strokeWidth / 2 + 10,
    propObj.strokeWidth / 2 + 10,
    propObj.radius * 2 - propObj.strokeWidth - 20,
    propObj.radius * 2 - propObj.strokeWidth - 20
  );

  const paths = propObj.arcs.map((arc) => {
    const path = Skia.Path.Make();
    path.addArc(rc, arc.startAngleInDegrees, arc.sweepAngleInDegrees);

    return (
      <Path
        path={path}
        color={arc.color}
        style={"stroke"}
        strokeWidth={propObj.strokeWidth}
        key={arc.startAngleInDegrees}
      ></Path>
    );
  });

  return (
    <><Text style = {styles.headline}>{currentMonthPositions?.title}</Text>
    <View
      style={{
        height: propObj.radius * 3,
        width: propObj.radius * 3,
        alignSelf: "center",
      }}
    >
      
      <Canvas
        style={{ flex: 1, alignSelf: "stretch", backgroundColor: "lightgrey" }}
      >
        <Group
          transform={translate(point(propObj.radius / 2, propObj.radius / 2))}
        >
          <Circle
            cx={propObj.radius}
            cy={propObj.radius}
            r={propObj.radius}
            color="#F2F2F2"
          />
          {paths}
        </Group>
      </Canvas>
    </View>
    <View style = {styles.inout}>
      <Text style = {{fontSize: 25, borderRadius: 500, padding: 20, backgroundColor: theme.colors.primary, color: theme.colors.onPrimary}}>
          In: {actualIn}€
        </Text>
      <Text style = {{fontSize: 25, borderRadius: 500, padding: 20, backgroundColor: theme.colors.error, color: theme.colors.onError}}>
          Out: {actualOut}€
        </Text>
    </View>
    </>);
}

const styles = StyleSheet.create({
  inout:{
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"
  },
  headline:{
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginRight: 10
  },
});