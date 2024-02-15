import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Intro from '../screens/Intro';
import MyProfile from '../screens/MyProfile';
import OTPScreen from '../screens/OTPScreen';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import MyMobile from '../screens/MyMobile';
import Location from '../screens/Location';
import AllowNotification from '../screens/AllowNotification';
import Gender from '../screens/Gender';
const Stack = createStackNavigator();

export default function AppNavigation (){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Gender"
            component={Gender}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTPScreen"
            component={OTPScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
           
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyMobile"
            component={MyMobile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={{ headerShown: false }}
          />
          <Stack.Screen
             name="AllowNotification"
             component={AllowNotification}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}