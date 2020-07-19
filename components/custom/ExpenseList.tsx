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

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("https://techlinegroup.com/expense/api/get_all.php")
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
          <ScrollView style={styles.scrollView}>
            <View key={key} style={styles.item}>
              <Text>
                {val.title} {val.amount}
              </Text>
            </View>
          </ScrollView>
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
    backgroundColor: "pink",
    marginHorizontal: 20
  }
});
export default ExpenseList;
