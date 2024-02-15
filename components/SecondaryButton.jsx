import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../assets/theme";
import { CalenderIcon } from "../assets/Icon";

const SecondaryButton = ({ title = "", ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.secondaryButton}
      activeOpacity={0.7}
      {...rest}
    >
      <CalenderIcon style={styles.calenderIcon} />
      <Text style={styles.confirmText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  calenderIcon: { width: 20, height: 20 },
  secondaryButton: {
    backgroundColor: "rgba(167, 32, 36, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: {
    color: theme.colors.primaryRed,
    fontWeight: "bold",
    fontSize: 16,
  },
});
