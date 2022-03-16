import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import React, { FC } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AnimalClasses, AnimalList } from "../helpers/data";
import { AnimalDetailsComponent, AnimalTop } from "../components/Index";

const App: FC = (props: any) => {
  return (
    <View style={{ flex: 1, paddingTop: 30, backgroundColor: "white" }}>
      <View style={styles.top}>
        <FontAwesome
          name="bars"
          size={17}
          onPress={() => props.navigation.toggleDrawer()}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 13, color: "#aaa" }}>Location</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="location-sharp" color="#3f5956" />
            <Text style={{ fontSize: 17, color: "#3f5956" }}>
              Kyiv, <Text style={{ color: "#777" }}>Ukraine</Text>
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/profile.jpg")}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={16} color="#bbb" />
          <TextInput
            style={{ width: "70%", height: 35 }}
            placeholder="Search pet to adopt"
          />
          <FontAwesome name="sliders" size={16} color="#bbb" />
        </View>
        <View>
          <FlatList
            data={AnimalClasses}
            renderItem={({ item }) => (
              <AnimalTop name={item.name} image={item.image} id={item.id} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={AnimalList}
            renderItem={({ item }) => (
              <AnimalDetailsComponent
                id={item.id}
                distance={item.distance}
                image={item.image}
                name={item.name}
                type={item.type}
                years={item.years}
                color={item.color}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 500,
    borderWidth: 0.4,
    overflow: "hidden"
  },
  body: {
    backgroundColor: "#f6f6f6",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    marginVertical: 30,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff"
  }
});
