import React, { Component } from "react";
import { useState } from "react";

import {
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Picker,
  Button,
  Alert,
  Text
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "./utilities";

const createStartedAddingAlert = () =>
  Alert.alert(
    "Started Adding",
    "Succesfully started Adding",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => console.log("ssssssssssssssssssss started adding>>>>>> ")
      }
    ],
    { cancelable: false }
  );

const createFinishedAddingAlert = () =>
  Alert.alert(
    "Finished Adding",
    "Succesfully finished Adding",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => console.log("ffffffffffffffff finished adding>>>>>> ")
      }
    ],
    { cancelable: false }
  );

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: "",
      title: "",
      description: "",
      category: "--Select One--",
      subcategory: "",
      thedatetime: "",
      amount: 0
    };
  }

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

  updateValue(text, fields) {
    if (fields == "title") {
      this.setState({
        title: text
      });
    } else if (fields == "amount") {
      this.setState({
        amount: text
      });
    }
  }
  submit = () => {
    let formData = new FormData();
    // let collection = {};
    formData.append("title", this.state.title);
    formData.append("amount", this.state.amount);
    formData.append("category", this.state.category);
    formData.append("date_time", this.state.thedatetime);

    console.warn(formData);

    // collection.title = this.state.title;
    // collection.amount = this.state.amount;
    // collection.category = this.state.category;
    // collection.date_time = this.state.thedatetime;
    //
    // console.warn(collection);

    fetch("https://techlinegroup.com/expense/api/add_exp.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data."
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      }),
      createFinishedAddingAlert();
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.text}
              placeholder="Expense Title"
              spellCheck={false}
              onChangeText={text => this.updateValue(text, "title")}
            />
          </View>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.text}
              placeholder="Amount"
              spellCheck={false}
              keyboardType={"numeric"}
              onChangeText={text => this.updateValue(text, "amount")}
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
              <Picker.Item
                label="Entertainment/Fun"
                value="Entertainment/Fun"
              />
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
          <TouchableHighlight onPress={this.submit} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
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
