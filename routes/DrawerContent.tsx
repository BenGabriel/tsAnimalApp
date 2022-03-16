import { DrawerContentScrollView } from "@react-navigation/drawer";
import { FC } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("screen");

const DrawerContent: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, paddingLeft: 20 }}>
      <DrawerContentScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30
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
                color: "#ddd",
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              Miroslva Savitskaya
            </Text>
            <Text
              style={{
                color: "#aaa",
                fontSize: 12
              }}
            >
              Active status
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: height / 6
          }}
        >
          <Pressable style={styles.drawerItem}>
            <Ionicons name="paw" size={18} color="#ddd" />
            <Text style={styles.text}>Adoption</Text>
          </Pressable>
          <Pressable style={styles.drawerItem}>
            <Ionicons name="mail-open" size={18} color="#ddd" />
            <Text style={styles.text}>Donation</Text>
          </Pressable>
          <Pressable style={styles.drawerItem}>
            <FontAwesome name="plus" size={19} color="#ddd" />
            <Text style={styles.text}>Add pet</Text>
          </Pressable>
          <Pressable style={styles.drawerItem}>
            <Ionicons name="heart-sharp" size={18} color="#ddd" />
            <Text style={styles.text}>Favorites</Text>
          </Pressable>
          <Pressable style={styles.drawerItem}>
            <Ionicons name="mail-sharp" size={18} color="#ddd" />
            <Text style={styles.text}>Messages</Text>
          </Pressable>
          <Pressable style={styles.drawerItem}>
            <Ionicons name="person" size={18} color="#ddd" />
            <Text style={styles.text}>Profile</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Ionicons name="settings-sharp" size={22} color="#ddd" />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.logOut}>Sign Out</Text>
      </View>
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  logOut: {
    color: "#ddd",
    fontSize: 16,
    borderLeftWidth: 1,
    width: "45%",
    textAlign: "center",
    borderLeftColor: "#ddd"
  },
  text: {
    color: "#ddd",
    fontSize: 16,
    marginLeft: 10
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15
  }
});
