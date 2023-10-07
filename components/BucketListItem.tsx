import React from "react";
import { useTheme, Card, ProgressBar } from "react-native-paper";
import { List, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

type BucketListItemProps = {
  title: string;
  isClicked?: boolean;
};

export default function BucketListItem(props: BucketListItemProps) {
  const theme = useTheme();

  return (
    <Card>
      <Card.Content
        style={[
          props.isClicked ? styles.clickedBucket : styles.bucket,
          { backgroundColor: theme.colors.primary },
        ]}
      >
        <Text style={[{ color: theme.colors.onPrimary }]} variant="titleLarge">
          {props.title}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  bucket: {
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 7,
  },
  clickedBucket: {
    borderRadius: 8,
    borderColor: "rgba(119, 151, 123, 0.8)",
    borderWidth: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 7,
  },
  bar: {
    borderRadius: 2,
  },
});
