import React from 'react';
import {View, StyleSheet} from 'react-native';
import ToggleSwitch from '../components/toggleSwitch';

const Gender = () => {
    return (
        <View>
            <ToggleSwitch title="Men" />
            <ToggleSwitch title="women" />
            <ToggleSwitch title="Binnary" />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Gender;
