import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import idolData from '../master/idolData.json';

const styles = StyleSheet.create({
  container: {},

  idolButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    margin: 5,
    borderWidth: 2,
  },

  idolButtonText: {
    fontSize: 16,
  },
});

const IdolButton = (props) => {
  const customButtonStyle = () => {
    return {
      ...styles.idolButton,
      borderColor: idolData[props.idol].color,
      backgroundColor: idolData[props.idol].color,
    };
  };

  return (
    <View>
      <TouchableOpacity style={customButtonStyle()}>
        <Text style={styles.idolButtonText} key={props.index}>
          {idolData[props.idol].screenName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IdolButton;
