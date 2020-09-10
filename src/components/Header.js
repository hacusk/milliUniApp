import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
  },
});

const Header = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>MILLIONLIVE!-UNIT-SEARCH</Text>
    </View>
  );
};

export default Header;
