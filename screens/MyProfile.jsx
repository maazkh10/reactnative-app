import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  DatePickerAndroid,
  Image,
  
} from "react-native";
import { CameraIcon } from "../assets/Icon";
import { theme } from "../assets/theme";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import RNTextInput from "../components/RNTextInput";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function MyProfile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      console.log("You did not select any image.");
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={{ height: "100%", justifyContent: "center" }}>
        <Text style={styles.title}>Profile details</Text>
        <Text style={styles.text}>Choose a photo where your face is clearly visible. You can change this later.</Text>
        <View style={styles.imageWrapper}>
          {/* <View style={styles.imageContainer}>
            <View style={styles.cameraIconContainer}>
              <CameraIcon style={styles.cameraIcon} />
            </View>
            
            <Image
              source={require("../assets/icon.png")}
              style={styles.image}
            />
          </View> */}

          <TouchableOpacity onPress={pickImageAsync}>
            <View style={styles.imageContainer}>
              <Text></Text>
            <View style={styles.cameraIconContainer}>
              <CameraIcon style={styles.cameraIcon} />
            </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <RNTextInput
            value={firstName}
            onChangeText={setFirstName}
            labelName={"First name"}
          />

          <RNTextInput
            value={lastName}
            onChangeText={setLastName}
            labelName={"Last name"}
          />

          <RNTextInput
            value={email}
            labelName={"Email"}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <SecondaryButton title="Choose birthday date" />

          <PrimaryButton 
           onPress={() => navigation.navigate("Gender")}
          title="Confirm" />
        </View>
        <View>
        <Text style={styles.plztxt}>Please note that these details will be verified with your Aadhaar details later.</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 50,
    paddingVertical: 80,
    marginVertical: "auto",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 40,
    opacity: 0.5,
  },
  imageWrapper: { display: "flex", flexDirection: "row", columnGap: 25 },
  imageContainer: {
    border: 1,
    width: 100,
    height: 100,
    borderRadius: 21,
    position: "relative",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cameraIconContainer: {
    position: "absolute",
    zIndex: 10,
    width: 38,
    height: 38,
    bottom: -10,
    right: -10,
    padding: 6,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryRed,
    borderColor: "#fff",
  },
  cameraIcon: {
    fill: "#fff",
  },
  addPhoto: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.primaryRed,
  },
  inputContainer: {
    marginBottom: 22,
    rowGap: 20,
  },
  plztxt:{
    margin: 10,
    marginTop: 25,
    color:"gray",
    
  },
  birthdayButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  birthdayText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonWrapper: {
    rowGap: 16,
  },
});
