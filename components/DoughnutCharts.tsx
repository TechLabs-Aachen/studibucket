import { View } from "react-native";
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

export default function DoughnutCharts() {
  const arc1: Arc = {
    startAngleInDegrees: 30,
    sweepAngleInDegrees: 180,
    color: "red",
  };

  const arc2: Arc = {
    startAngleInDegrees: 210,
    sweepAngleInDegrees: 180,
    color: "blue",
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
    <View
      style={{
        height: propObj.radius * 3,
        width: propObj.radius * 3,
        alignSelf: "center",
        backgroundColor: "red",
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
  );
}
