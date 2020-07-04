import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";

const STATIC_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

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
          dataSource: responseJson.users
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
            <Text>{val.title}</Text>
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
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8
  },
  title: {
    fontSize: 16
  }
});
export default ExpenseList;
