import React, { Component } from "react";
import {
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
  Text
} from "react-native";

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});

class ExpenseForm extends Component {
  state = {
    title: null,
    description: null,
    amount: null,
    date: ""
  };
  handlaAddPress = () => {
    console.log(this.state);
  };

  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  handleChangeDesc = value => {
    this.setState({ title: value });
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Expense Title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
        </View>

        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Description"
            spellCheck={false}
            value={this.state.description}
            onChangeText={this.handleChangeDesc}
          />
        </View>

        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default ExpenseForm;
