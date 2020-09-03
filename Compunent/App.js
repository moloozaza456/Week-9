import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "React native in Thailand",
    };
  }
  render() {
    return (
      <View>
        <Text style={{fontSize:20}}>{this.state.text}</Text>
        <Text style={{color:"red"}}>Hello, I have a Book.</Text>
      </View>
    );
  }
}
export default App;
