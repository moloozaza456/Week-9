import React from "react";
import { View, Text, Image } from "react-native";

const tBanana = (props) => {
  return (
    <View style={{alignItems:"center"}}>
      <Text>Type{props.name}</Text>
    </View>
  );
};

const Banana = () => {
  let pic = {
    uri: "https://gf.lnwfile.com/ngu75e.jpg",
  };
  return (
    <View style={{ backgroundColor: "blue", alignItems: "center" }}>
      <Image 
      style={{ width: 250, height: 250, margintop: 20 }} 
      source={pic} />
      <Text>Hello, I am a Banana</Text>
      <tBanana name="1. Cavendish Banana" />
    </View>
  );
};
export default Banana;
