import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { theme } from "../assets/theme";
import PrimaryButton from "../components/PrimaryButton";
import { LockIcon } from "../assets/Icon";
import { useNavigation } from "@react-navigation/core";

const MyMobile = () => {
  const navigation = useNavigation();

  const mynavigation = () =>{
      navigation.navigate('Location')
  }
  const [code, setCode] = useState("");

  const handleCodeChange = (text) => {
    setCode(text);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-start" }}>
        <Text style={styles.title}>My mobile</Text>
        <Text style={styles.text}>
          Please enter your valid phone number We will send you a 4-digit code
          to verify your account
        </Text>
      </View>
      <PhoneInput
        layout="first"
        defaultCode="IN"
        countryPickerButtonStyle={{ backgroundColor: "transparent" }}
        containerStyle={styles.input}
        textContainerStyle={styles.textContainerStyle}
      />

      <View style={{ rowGap: 4, width: "100%" }}>
        <View style={styles.privacyContainer}>
          <LockIcon style={{ width: 20, height: 20 }} />
          <Text style={styles.privacyText}>
            We never share this with anyone and it won't be on you profile
          </Text>
        </View>
        <TouchableOpacity onPress={mynavigation}>
        <PrimaryButton onPress={()=>navigation.navigate('OTPScreen')} title="Continue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    marginTop: 4,
    opacity: 0.5,
  },
  privacyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    flexDirection: "row",
    columnGap: 10,
    marginBottom:20
  },
  privacyText: { fontSize: 12, marginTop: 4, opacity: 0.5 },
  textContainerStyle: {
    backgroundColor: "#fff",
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.border,
    marginVertical: 10,
    paddingVertical: 2,
  },
  input: {
    marginVertical: 15,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});

export default MyMobile;