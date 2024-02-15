import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SvgComponent from '../assets/svg';
import PrimaryButton from '../components/PrimaryButton';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SvgComponent />

      <Text style={styles.signupText}>Sign up</Text>

      <View style={styles.gap} />

      <PrimaryButton
        title="Use mobile number"
        onPress={() => navigation.navigate('MyMobile')}
      />

      <View style={styles.terms}>
        <Text>Terms of use</Text>
        <Text>Privacy Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '700',
  },
  gap: {
    height: 20,
  },
  terms: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});

export default Signup;
