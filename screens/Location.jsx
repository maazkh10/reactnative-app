import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgLocation } from "../assets/svgrwo";
import PrimaryButton from "../components/PrimaryButton";

const Location = ({ navigation }) => {
  return (
    <View style={{  flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <View style={styles.iconWrapper}>
            <SvgLocation style={{ width: 40, height: 40, fill: "#fff" }} />
          </View>
          <View style={styles.maintxt}>
            <Text style={styles.text}>Set your location </Text>
            <Text style={styles.text}>Service</Text>
            <Text style={styles.textt}>
              We sneakily peek at your location to unveil potential matches just
              around the corner. It's like having a matchmaking ninja in your
              pocket!
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 80, marginLeft: 60 }}>
        <PrimaryButton
          title="Set location services"
          onPress={() => navigation.navigate("AllowNotification")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Center vertically
  },
  iconWrapper: {
    padding: 4,
    width: 60,
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A72024",
  },
  svgContainer: {
    marginLeft: 20, // Adjust the marginLeft to move the icon to the left
    marginRight: 20,
  },
  buttonn: {
    backgroundColor: "#A72024",
    width: 250,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  txt: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 16,
  },
  text: {
    marginLeft: "",
    fontWeight: "bold",
    fontSize: 34,
    padding: 2,
  },
  textt: {

    fontSize: 15,
    padding: 10
  },
});

export default Location;
