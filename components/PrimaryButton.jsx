import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../assets/theme";

const PrimaryButton = ({ title = "", ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.primaryButton}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.confirmText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: theme.colors.primaryRed,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
