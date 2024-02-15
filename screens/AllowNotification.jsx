import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { AllowNotificationIcon } from "../assets/Icon";

const AllowNotification = ({ navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <View style={styles.iconWrapper}>
            <AllowNotificationIcon
              style={{ width: 40, height: 40, fill: "#fff" }}
            />
          </View>
          <Text style={styles.text}>Allow </Text>
          <Text style={styles.text}>Notification</Text>
          <Text style={styles.textt}>
            We'll tell you when you have new matches and messages
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Set location services"
          onPress={() => navigation.navigate("MyProfile")}
        />
        <View style={styles.notNowContainer}>
          <Text style={styles.notNowText}>Not Now</Text>
        </View>
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
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 60,
    marginBottom: 80,
  },
  notNowContainer: {
    marginTop: 10, // Adjust the marginTop to control the spacing between the button and "Not Now"
  },
  notNowText: {
    color: "#A72024",
    fontSize: 16,
    fontWeight: "bold",
  },
  svgContainer: {
    marginRight: 60,
  },
  text: {
    marginRight: 40,
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
  },
  textt: {
    marginLeft: 10,
    marginRight: 60,
    fontSize: 15,
    margin: 10,
  },
});

export default AllowNotification;
