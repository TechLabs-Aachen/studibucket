import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { ProgressBar, MD3Colors } from "react-native-paper";

type BucketsProps = {
  title: string;
  date: Date;
  goalAmount: number;
  currentAmount: number;
  active?: boolean;
  isClicked?: boolean;
};

export default function Buckets(props: BucketsProps) {
  const theme = useTheme();

  return (
    <Card>
      <Card.Content
        style={[
          props.isClicked ? styles.clickedBucket : styles.bucket,
          props.active && { backgroundColor: theme.colors.primary },
        ]}
      >
        <ProgressBar
          style={[
            styles.bar,
            props.active && { backgroundColor: theme.colors.error },
          ]}
          progress={
            props.active ? 1 - props.currentAmount / props.goalAmount : 1
          }
          color={props.active ? theme.colors.onPrimary : theme.colors.primary}
        />
        <Text
          style={[
            { color: theme.colors.primary },
            props.active && { color: theme.colors.onPrimary },
          ]}
          variant="titleLarge"
        >
          {props.title}
        </Text>
        <Text
          style={[
            { color: theme.colors.primary },
            props.active && { color: theme.colors.onPrimary },
          ]}
          variant="bodyMedium"
        >
          {props.currentAmount} € {props.active ? "until " : "reached on "}
          {props.date.toLocaleDateString()}
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
    borderColor: "rgba(11, 141, 56, 0.8)",
    borderWidth: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 7,
  },
  bar: {
    borderRadius: 2,
  },
});
