import { StyleSheet, SectionList, View } from "react-native";
import { List, useTheme, Text } from "react-native-paper";
import Buckets from "../components/Buckets";
import { useEffect, useState } from "react";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthStore } from "../stores/auth";
import { shallow } from "zustand/shallow";

const activeBucketsData = [
  {
    id: "1",
    title: "Vacation",
    currentAmount: 50,
    goalAmount: 300.0,
    type: "active",
  },
  {
    id: "2",
    title: "Car",
    currentAmount: 5000.0,
    goalAmount: 10000.0,
    type: "active",
  },
];

const passiveBucketsData = [
  {
    id: "3",
    title: "Trip to Bali",
    currentAmount: 1000.0,
    goalAmount: 2000.0,
    type: "passive",
  },
];

const DATA = [
  {
    title: "Active Buckets",
    data: activeBucketsData,
  },
  {
    title: "Past Buckets",
    data: passiveBucketsData,
  },
];

export default function BucketsScreen() {
  const theme = useTheme();
  const user = useAuthStore((state) => state.user, shallow);
  const [buckets, setBuckets] = useState<any>([]);

  const DATA = [
    {
      title: "Active Buckets",
      data: buckets,
    },
    {
      title: "Past Buckets",
      data: buckets,
    },
  ];

  useEffect(() => {
    // const docRef = doc(db, "users", user!.uid, "buckets");

    const asyncFunc = async () => {
      const querySnapshot = await getDocs(
        collection(db, "users", user!.uid, "buckets")
      );
      const newBuckets = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data();

        return {
          id: doc.id,
          title: data.title,
          currentAmount: 0,
          date: data.inputDate.toDate(),
          goalAmount: data.amount,
          type: "active",
        };
      });

      console.log("!!!", newBuckets);
      setBuckets(newBuckets);
    };

    asyncFunc();
  }, []);

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          variant="titleLarge"
          style={{
            color: theme.colors.primary,
            fontWeight: "800",
            marginHorizontal: 15,
            marginTop: 20,
          }}
        >
          {title}
        </Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Buckets
            title={item.title}
            currentAmount={item.currentAmount}
            goalAmount={item.goalAmount}
            date={item.date}
            active={item.type == "active"}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  bucket: {
    flex: 1,
    margin: 12,
    gap: 15,
  },
  item: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
