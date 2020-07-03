import React, { Component } from "react";

import {
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
  Picker,
  Text
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "./utilities";

class ExpenseForm extends Component {
  state = {
    title: null,
    description: null,
    category: "",
    subcategory: "",
    thedatetime: "",
    amount: 0
  };

  state = {
    category: "--Select One--"
  };

  handlaAddPress = () => {
    console.log(this.state);
  };

  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  handleChangeAmount = value => {
    this.setState({ amount: value });
  };

  handleDatePicked = thedatetime => {
    this.setState({
      thedatetime
    });

    this.handleDatePickerHide();
  };

  handleDatePickerHide = () => {
    this.setState({
      showDatePicker: false
    });
  };

  handleDatePress = () => {
    this.setState({
      showDatePicker: true
    });
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
            placeholder="Amount"
            spellCheck={false}
            value={this.state.amount}
            keyboardType={"numeric"}
            onChangeText={this.handleChangeAmount}
          />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
            value={formatDateTime(this.state.thedatetime)}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.category}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ category: itemValue })
            }
          >
            <Picker.Item label="--Select One--" value="--Select One--" />
            <Picker.Item label="Automobile" value="Automobile" />
            <Picker.Item label="Clothing" value="Clothing" />
            <Picker.Item label="Debt Reduction" value="Debt Reduction" />
            <Picker.Item label="Education" value="Education" />
            <Picker.Item label="Entertainment/Fun" value="Entertainment/Fun" />
            <Picker.Item label="Family" value="Family" />
            <Picker.Item label="Food" value="Food" />
            <Picker.Item label="Gifts" value="Gifts" />
            <Picker.Item label="Giving" value="Giving" />
            <Picker.Item
              label="Household Items/Supplies"
              value="Household Items/Supplies"
            />
            <Picker.Item label="Insurance" value="Insurance" />
            <Picker.Item label="Investments" value="Investments" />
            <Picker.Item label="Maintenance" value="Maintenance" />
            <Picker.Item label="Medical" value="Medical" />
            <Picker.Item label="Personal" value="Personal" />
            <Picker.Item label="Shelter/Home" value="Shelter/Home" />
            <Picker.Item label="Training" value="Training" />
            <Picker.Item label="Transportation" value="Transportation" />
            <Picker.Item label="Travel/Vacations" value="Travel/Vacations" />
            <Picker.Item label="Utilities" value="Utilities" />
          </Picker>
        </View>
        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
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
  },
  pickerContainer: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center"
  }
});

export default ExpenseForm;
