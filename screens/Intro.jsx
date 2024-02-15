import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, Animated, TouchableOpacity } from "react-native";
import SvgComponent from "../assets/svg";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Intro = ({ navigation }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const handleSvgClick = () => {
    Animated.timing(translateY, {
      toValue: -900,
      duration: 900,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.intro, { transform: [{ translateY }] }]}>
        {/* SVG Component */}
        <TouchableOpacity onPress={handleSvgClick}>
          <SvgComponent />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  intro: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    backgroundColor: "white",
  },
});

export default Intro;
