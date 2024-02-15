import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import OTPInput from "../components/OTPInput";
import { theme } from "../assets/theme";
import { ClearIcon } from "../assets/Icon";

const OTPScreen = ({navigation}) => {
  const [otp, setOtp] = useState(["", "", "", ""]); // State for each digit

  const handleOtpChange = (index, value) => {
    // Update the state when a digit is entered
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleNumberPress = (number) => {
    const emptyIndex = otp.findIndex((digit) => digit === "");
    if (emptyIndex !== -1) {
      handleOtpChange(emptyIndex, number.toString());
    }
  };

  const handleXButtonPress = () => {
    setOtp(["", "", "", ""]);
  };

  const handleInputFocus = () => {
    Keyboard.dismiss();
  };

  const numberPad = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "",
    0,
    { key: "X", onPress: handleXButtonPress },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>00:42</Text>
      <Text
        style={styles.text}
      >{`Type the verification\ncode\nwe've sent you`}</Text>
      <View style={styles.otpWrapper}>
        {otp.map((digit, index) => (
          <OTPInput
            key={`otp_${index}`}
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
          />
        ))}
      </View>
      <View style={styles.numberPad}>
        {numberPad.map((item, index) => (
          <TouchableOpacity
            key={`num_${index}`}
            style={styles.numberButton}
            onPress={() =>
              typeof item === "number"
                ? handleNumberPress(item)
                : item.onPress()
            }
          >
            <Text style={styles.numberButtonText}>
              {typeof item === "number" ? (
                item
              ) : item.key === "X" ? (
                <ClearIcon />
              ) : (
                ""
              )}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Location')}>
        <Text style={styles.sendAgain}>Send again</Text>
      </TouchableOpacity>
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
  otpWrapper: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    columnGap: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    textAlign: "center",
    opacity: 0.5,
    maxWidth: 150,
  },
  numberPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginVertical: 40,
    maxWidth: 260,
    columnGap: 10,
    rowGap: 10,
  },
  numberButton: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    borderColor: "#ccc",
  },
  numberButtonText: {
    fontSize: 20,
  },
  sendAgain: {
    marginTop: 10,
    textAlign: "center",
    color: theme.colors.primaryRed,
    fontWeight: "bold",
  },
});

export default OTPScreen;