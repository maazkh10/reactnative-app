import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { theme } from "../assets/theme";

function RNTextInput({ labelName, ...props }) {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.labelName}> {labelName}</Text>
      <TextInput
        style={styles.input}
        cursorColor={theme.colors.primaryRed}
        {...props}
      />
    </View>
  );
}

export default RNTextInput;

const styles = StyleSheet.create({
  labelName: {
    position: "absolute",
    backgroundColor: "#fff",
    top: -10,
    left: 16,
    paddingHorizontal: 2,
    color: "rgba(0,0,0,0.3)",
  },
  inputWrapper: {
    position: "relative",
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
