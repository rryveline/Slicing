import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});
