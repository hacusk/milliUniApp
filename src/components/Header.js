import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>MILLIONLIVE!-UNIT-SEARCH</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,
  },
});
