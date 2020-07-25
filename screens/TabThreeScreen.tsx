import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ReportsList from "../components/custom/ReportsList.tsx";
import TodaysReport from "../components/custom/TodaysReport.tsx";
import YesterdaysReport from "../components/custom/YesterdaysReport.tsx";
import ThisWeek from "../components/custom/ThisWeek.tsx";
import ThisMonth from "../components/custom/ThisMonth.tsx";

export default function TabThreeScreen() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Text style={styles.title}>Reports</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TodaysReport />
      <YesterdaysReport />
      <ThisWeek />
      <ThisMonth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    marginLeft: 20,
    width: "80%"
  }
});
