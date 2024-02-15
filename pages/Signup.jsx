import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SvgComponent from '../assets/svg';

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SvgComponent />
        <View style={styles.text}>
        <Text >Sign up to continuess</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, // Adjust this value to control the gap
  },
  text: {
    marginTop: 20, // Add margin to the top of the text
  },
});

export default Signup;
