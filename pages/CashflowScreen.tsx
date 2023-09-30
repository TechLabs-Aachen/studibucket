import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, SectionList } from "react-native";
import { Timestamp, collection, collectionGroup, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useAuthStore } from "../stores/auth";
import { db } from "../firebase";
import { List, useTheme, Text } from "react-native-paper";
import { shallow } from "zustand/shallow";
import { groupBy, mapToArray } from "./utils/arrayUtils";

// ToDo's:
// Sort data by income and expense (income above)

const julyData = [
  {
    id: "1",
    title: "BAföG",
    money: 600,
    type: "income",
  },
  {
    id: "2",
    title: "electricity",
    money: -30,
    type: "expense",
  },
  {
    id: "10",
    title: "wifi",
    money: -30,
    type: "expense",
  },
  {
    id: "13",
    title: "tutoring",
    money: -30,
    type: "income",
  },
];

const juneData = [
  {
    id: "3",
    title: "BAföG",
    money: 600,
    type: "income",
  },
  {
    id: "4",
    title: "electricity",
    money: -30,
    type: "expense",
  },
];

const augustData = [
  {
    id: "5",
    title: "BAföG",
    money: 600,
    type: "income",
  },
  {
    id: "6",
    title: "electricity",
    money: -30,
    type: "expense",
  },
];

const DATA = [
  {
    title: "July",
    data: julyData,
  },
  {
    title: "June",
    data: juneData,
  },
  {
    title: "August",
    data: augustData,
  },
];

export type Position = {
    id: string,
    title: string,
    money: number,
    inputDate: Timestamp,
    sectionKey: string,
    type: "in" | "out", 
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function CashflowScreen() {
  const user = useAuthStore((state) => state.user, shallow);
  const theme = useTheme();
  const [cashFlowPositions, setCashFlowPositions] = useState<any>([]);
  const cashFlowSectionsMap = groupBy<string, Position>(cashFlowPositions, (i) => i.sectionKey) 
  const cashFlowSectionsArray = mapToArray(cashFlowSectionsMap, (k, v) => {
    return ({
      title: k,
      data: v,
  }) })

  console.log("cashArray",cashFlowSectionsArray)
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

  return (
    <View style={styles.container}>
      <SectionList
        sections={cashFlowSectionsArray}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            variant="titleMedium"
            style={{
              color: theme.colors.primary,
              fontWeight: "700",
              marginHorizontal: 15,
              marginTop: 20,
            }}
          >
            {title}
          </Text>
        )}
        renderItem={({ item }) => (
          <List.Item
            style={[
              styles.item,
              item.type == "in" && {
                backgroundColor: theme.colors.primary,
              },
            ]}
            titleStyle={
              item.type == "in"
                ? { color: theme.colors.onPrimary }
                : { color: theme.colors.primary }
            }
            title={item.title}
            left={() => (
              <List.Icon
                color={
                  item.type == "in"
                    ? theme.colors.onPrimary
                    : theme.colors.primary
                }
                icon={item.type == "in" ? "plus" : "minus"}
              />
            )}
            right={() => (
              <Text
                style={
                  item.type == "in"
                    ? { color: theme.colors.onPrimary }
                    : { color: theme.colors.primary }
                }
                variant="titleMedium"
              >
                {item.money} €
              </Text>
            )}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    shadowRadius: 7,
  },
});
