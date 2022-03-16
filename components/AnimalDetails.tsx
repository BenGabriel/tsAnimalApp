import { Image, Pressable, Text, View } from "react-native";
import React, { FC } from "react";
import { Details } from "../helpers/types";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

const App: FC<Details> = (props) => {
  const navigation = useNavigation<any>();

  return (
    <SharedElement id={`item.${props.name}.photo`}>
      <Pressable
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20
        }}
        onPress={() =>
          navigation.navigate("animalDetails", {
            item: props
          })
        }
      >
        <View
          style={{
            width: 160,
            height: 180,
            borderRadius: 20,
            elevation: 1,
            backgroundColor: props.color
          }}
        >
          <SharedElement id={`item.${props.id}.photo`}>
            <Image
              source={props.image}
              style={{
                height: "110%",
                width: "110%",
                marginTop: -20
              }}
              resizeMode="contain"
            />
          </SharedElement>
        </View>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 1,
              padding: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              flex: 1
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#777"
                }}
              >
                {props.name}
              </Text>
              <Foundation name="male-symbol" size={20} color="#aaa" />
            </View>
            <Text
              style={{
                color: "#555",
                fontSize: 13,
                marginVertical: 5
              }}
            >
              {props.type}
            </Text>
            <Text
              style={{
                color: "#aaa",
                fontSize: 11
              }}
            >
              {props.years} years old
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Ionicons name="location" size={16} color="#3f5956" />
              <Text
                style={{
                  color: "#aaa",
                  fontSize: 13,
                  marginLeft: 8
                }}
              >
                Distance: {props.distance} km
              </Text>
            </View>
          </View>
      </Pressable>
    </SharedElement>
  );
};

export default App;
