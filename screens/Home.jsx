import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import CustomImageCarousal from "../components/CustomImageCrousal";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/PrimaryButton";

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Signup");
  };
  // intro page nhi aa raha hai start mai bhai
  return (
    <>
      <StatusBar backgroundColor={"#fff"} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <CustomImageCarousal data={data} />
          <TouchableOpacity style={{ marginTop: 50 }} onPress={handlePress}>
            <PrimaryButton title="create an account" onPress={()=>navigation.navigate('Signup')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, marginTop: 10 }}>
            Alredy have an account?{" "}
            <Text style={{ fontWeight: "bold", color: "#EA5455" }}>
              Sign in
            </Text>{" "}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  contentContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  txt: {
    marginBottom: 20,
  },
});

export default Home;

const data = [
  {
    image: {
      uri: "https://s3-alpha-sig.figma.com/img/87a3/0b83/25a2dbadc79c7eedb021dc27ab8dce9b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDX4NPvXYVxrOCb7t3DKrSvMKH-CsNTPnYJl1A4Us0TONUZTNe3vHirBPGSdnUNeOWscsttHkGgbknPSgAE3AGArB4oXp9GaQscwKeeid7HA2Ngp3rBHRXsMg6sVbi-UR~b9qKttkmmqYfDKvHKODaLIWFYUNzSzYzNBNcFeR7MekCnYx3jpQnyYLKytVHlixh7gq~kKDWxNHTS2WFcztYXgkJ8GjS~B3I54ryw9EfoF1odNynmXMqpLuh8UtHwi4qj~7OnUdQBm5b2H2qwu8gMbaWQzxEpaVn6GGsWjKOXZ~ddSJGGE1phj~kYz9GKU39-7kmKMTPJO8yV-cmwzyQ__",
    },
    heading: "Discover",
    text: "Unlock the Door to New Relationships with Go Dating. Let’s Get Started!",
  },
  {
    image: {
      uri: "https://s3-alpha-sig.figma.com/img/13f6/17c2/c161027d915a63a4df17cc2d9a1c4397?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyQCdtLsJp5EpsDt6Nal1IeQACUapsKz4~YqjNAZR5CaJ3owGBEJeHLriN24i4WKLU5FpYIkMu9cwJz1TCkIyWJ7LUTZDUBJqPv404Wq~W3I6GGqt73OqaVMWi6NMTpvW3KHnE861RXdPXBwfk89h0xbNr0HS4qXewuq5ovq2SRdRx28Htv4ogixbAbWeVyVML8mv4DsCAukYf12BGIrSnM5-hMRjUNlOw4Vp-P5IQWkxp1N7gkEHiDuN3JDi5OEcUGUxdYztZxmTaKaKNRGDdIwX25hcgH7206nbn8pubCGi3wRy5bXlZbC93L~IoAETwY0fPi1KVq7QTFpAP0Vvw__",
    },
    heading: "Matches",
    text: "Swipe your way to love! Explore a curated selection of profiles tailored just for you.",
  },
  {
    image: {
      uri: "https://s3-alpha-sig.figma.com/img/e0b2/e82e/07de2857fe662a436180d53922251f5a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U9M9eG9mjDz0ZUdekeJlN~JMNEnokgYEj4g75pDukU3ceXTZnU82p9uTvNmZp4pVnxfG4edRmvg70O-bN8qDN34oweYeZTFrCyfNxVD-6ElsaIXPAJoN23uBZhoKOnMGBffq4RRQMulU~oMi2n9~CLF-GV671-PaPKi8vPaLOQjNkqege9ZstAqbsbqwkVWuxfMRbsqjgkDP8L3~QPq7LcOJDox4jrT~Z1PH3SaLt9gM9WtGhYroYutONNekDwdN~FxWZQn30avn80uAIepTHaPtUMfJWXgiOuM8-cA88YJE3CshOvh5CjzLAEKHnjoKWeBB3Lh5Chp-BgHDwbb6Vw__",
    },
    heading: "Premium",
    text: "Sign up today and enjoy the first month of premium benefits on us.",
  },
];
