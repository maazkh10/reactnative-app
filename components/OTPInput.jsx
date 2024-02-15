import React, { useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { theme } from "../assets/theme";

function OTPInput({ ...props }) {
  const [isFocused, setFocused] = useState(false);


  return (
    <View
      style={[
        styles.inputWrapper,
        {
          borderColor: isFocused
            ? "rgba(167, 32, 36, 0.3)"
            : theme.colors.border,
          borderWidth: 1,
          backgroundColor: props.value.length
            ? theme.colors.primaryRed
            : "transparent",
        },
      ]}
    >
      <TextInput
        placeholder="0"
        placeholderTextColor={
          isFocused ? "rgba(167, 32, 36, 0.3)" : "rgba(0,0,0,0.1)"
        }
        // keyboardType="numeric"
        
        cursorColor={"rgba(0,0,0,0.1)"}
        maxLength={1}
        style={[
          styles.input,
          { color: props.value.length ? "#fff" : theme.colors.primaryRed },
        ]}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        {...props}
      />
    </View>
  );
}

export default OTPInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: 48,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },
  input: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});
