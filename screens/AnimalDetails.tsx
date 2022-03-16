import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { FC, useEffect } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { Foundation, Ionicons, Feather } from "@expo/vector-icons";

const App: FC = (props: any) => {
  const val = new Animated.Value(50);
  const {
    route: {
      params: { item }
    },
    navigation
  } = props;

  const animateValues = () =>
    Animated.timing(val, {
      toValue: -50,
      duration: 800,
      useNativeDriver: false
    }).start();

  useEffect(() => {
    animateValues();
  }, []);

  const mainInterpolate = val.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100]
  });

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
      <View style={{ flex: 1, paddingHorizontal: 30 }}>
        <Animated.View style={{ ...styles.animal, marginTop: mainInterpolate }}>
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
        </Animated.View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20
          }}
        >
          <View style={{ width: 30, height: 30, borderRadius: 100 }}>
            <Image
              source={require("../assets/profile.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100
              }}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "#aaa",
                fontSize: 16,
                fontWeight: "bold"
              }}
            >
              Mayo Berkovskoyo
            </Text>
            <Text
              style={{
                color: "#bbb",
                fontSize: 11
              }}
            >
              Owner
            </Text>
          </View>
          <Text
            style={{
              color: "#bbb",
              fontSize: 12,
              marginLeft: 60
            }}
          >
            May 25, 2019
          </Text>
        </View>
        <Text
          style={{
            marginBottom: 60,
            textAlign: "justify",
            width: "100%",
            color: "#666"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitationin
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              backgroundColor: "#3f5956",
              width: "17%",
              height: 46,
              borderRadius: 15,
              elevation: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Ionicons name="heart-outline" color="#fff" size={20} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#3f5956",
              width: "77%",
              height: 46,
              borderRadius: 15,
              elevation: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>Adoption</Text>
          </TouchableOpacity>
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
    width: "100%",
    alignSelf: "center",
    elevation: 1,
    backgroundColor: "#fff",
    paddingVertical: 15,
    padding: 20,
    borderRadius: 20,
    marginTop: -50,
    zIndex: 400
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
