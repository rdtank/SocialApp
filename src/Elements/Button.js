import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onPress, style, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContiner, style]}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContiner: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: 90,
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
