import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';

type BucketsProps = {
    title: string,
    date: Date,
    goalAmount: number,
    currentAmount: number,
    active?: boolean,
}

const Buckets = (props: BucketsProps) => (
  <Card>
    <Card.Content style={[styles.bucket, props.active && styles.activeBucket]}>
    <ProgressBar style={[styles.bar, props.active && styles.activeBar]} progress={props.active ? 1 - props.currentAmount/props.goalAmount : 1} color={props.active ? "white" : "#1D3557"} />
      <Text style={[styles.textBucket, props.active && styles.activeTextBucket]} variant="titleLarge">{props.title}</Text>
      <Text style={[styles.textBucket, props.active && styles.activeTextBucket]} variant="bodyMedium">{props.currentAmount} € {props.active? "until": "reached on"} {props.date.toLocaleDateString()}</Text>
    </Card.Content>
  </Card>
);

export default Buckets;

const styles = StyleSheet.create({
    activeBucket:{
        backgroundColor: "#1D3557",
    },
    bucket:{
        backgroundColor: "white",
        borderRadius: 8,
    },
    textBucket:{
        color: "#1D3557"
    },
    activeTextBucket:{
        color: "white"
    },
    bar:{
        backgroundColor: "grey",
        borderRadius: 2
    },
    activeBar:{
        backgroundColor: "#E63946"
    },
}  
)