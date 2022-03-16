import { createDrawerNavigator } from "@react-navigation/drawer";
import { FC } from "react";
import DrawerContent from "./DrawerContent";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation: FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: "#406c6b",
          width: "60%"
        },
        headerShown: false,
        sceneContainerStyle: {
          backgroundColor: "#406c6b",
        }
      }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="Dashboard" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
