import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({children, style}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
});
