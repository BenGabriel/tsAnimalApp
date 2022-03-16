import { Image, Pressable, Text, View } from "react-native";
import React, { FC } from "react";
import { AnimalProps } from "../helpers/types";

const App: FC<AnimalProps> = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginLeft: 20
      }}
    >
      <Pressable
        style={{
          backgroundColor: props.id === 1 ? "#3f5956" : "#fff",
          width: 55,
          height: 55,
          elevation: 1,
          borderRadius: 5,
          padding: 8
        }}
      >
        <Image
          source={props.image}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </Pressable>
      <Text style={{ color: "#a4a4a4", fontSize: 11, marginTop: 5 }}>
        {props.name}
      </Text>
    </View>
  );
};

export default App;
