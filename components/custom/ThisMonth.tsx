import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Reports" component={ReportsList} />
    </Stack.Navigator>
  );
}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class ReportsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("https://techlinegroup.com/expense/api/get_thismon_report.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.items
        });
      })

      .catch(error => console.log(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let myExpenses = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text>This Month's Report :</Text>
            <Text>{val.sum}</Text>
          </View>
        );
      });

      return <View style={styles.container}>{myExpenses}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    width: 250
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8
  },
  title: {
    fontSize: 16
  },
  scrollView: {
    marginHorizontal: 20
  }
});
export default ReportsList;
