import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { Foundation, Ionicons, Feather } from "@expo/vector-icons";

const App: FC = (props: any) => {
  const {
    route: {
      params: { item }
    },
    navigation
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <SharedElement id={`item.${item.name}.photo`} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: item.color, paddingTop: 35 }}>
          <View style={styles.header}>
            <Feather
              name="arrow-left"
              size={20}
              onPress={() => navigation.goBack()}
            />
            <Feather name="upload" size={20} />
          </View>
          <View style={styles.imageContainer}>
            <SharedElement id={`item.${item.id}.photo`}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </SharedElement>
          </View>
        </View>
      </SharedElement>
      <View style={{ flex: 1 }}>
        <View style={styles.animal}>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 18,
                color: "#777"
              }}
            >
              {item.name}
            </Text>
            <Foundation name="male-symbol" size={18} color="#aaa" />
          </View>
          <View style={[styles.container, { marginTop: 2 }]}>
            <Text
              style={{
                fontSize: 13,
                color: "#777"
              }}
            >
              {item.type}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#777"
              }}
            >
              {item.years} years old
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5
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
                5 Bolvrno.Kudriavska Street, Kyiv
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

App.sharedElements = (route: any) => {
  const { item } = route.params;

  return [
    {
      id: `item.${item.name}.photo`,
      animation: "fade"
    },
    {
      id: `item.${item.id}.photo`,
      animation: "fade"
    }
  ];
};

export default App;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
    marginTop: 10
  },
  imageContainer: {
    marginTop: -50,
    alignSelf: "center",
    width: 310,
    height: 310,
    marginLeft: 40
  },
  animal: {
    width: "80%",
    alignSelf: "center",
    elevation: 1,
    backgroundColor: "#fff",
    paddingVertical: 15,
    padding: 20,
    borderRadius: 20,
    marginTop: -50
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
