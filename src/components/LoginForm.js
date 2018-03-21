import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { saveUser } from "../actions/LoginAction.js";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  login = () => {
    this.props.saveUser(this.state.text);
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Last.fm - App</Text>
        <Text style={styles.labelStyle}>
          Please provide your Last.fm Username:
        </Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="ottoman153"
          onChangeText={text => this.setState({ text })}
        />
        <View style={styles.buttonStyle}>
          <Button onPress={this.login} title="Send" color="#c91818" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  titleStyle: {
    padding: 10,
    paddingTop: 50,
    fontSize: 42,
    alignSelf: "stretch",
    textAlign: "center",
    color: "#c91818",
    backgroundColor: "#000"
  },
  labelStyle: {
    marginTop: 50,
    fontSize: 20,
    alignSelf: "center"
  },
  textInputStyle: {
    height: 40,
    margin: 10,
    fontSize: 18,
    textAlign: "center"
  },
  buttonStyle: {
    margin: 20
  }
});

export default connect(null, { saveUser })(LoginForm);
