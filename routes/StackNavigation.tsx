import { useDrawerStatus } from "@react-navigation/drawer";
import React, { FC } from "react";
import Animated from "react-native-reanimated";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { HomeScreen, AnimalDetails } from "../screens";

const Stack = createSharedElementStackNavigator();

const StackNavigation: FC = () => {
  const progress =
    useDrawerStatus() === "open"
      ? new Animated.Value(1)
      : new Animated.Value(0);

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7]
  });

  const screenStyles = { transform: [{ scale }] };

  return (
    <Animated.View style={{ ...screenStyles, flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="animalDetails" component={AnimalDetails} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default StackNavigation;
