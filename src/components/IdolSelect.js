import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IdolButton from './IdolButton';
import idolData from '../master/idolData.json';
import idolToUnit from '../data/idolToUnit.json';

const IdolSelect = () => {
  const listIdols = Object.keys(idolToUnit);

  const [filterTypes, setFilterTypes] = useState([
    'princess',
    'fairy',
    'angel',
  ]);

  const setFilter = (type) => {
    if (filterTypes.indexOf(type) !== -1) {
      return setFilterTypes(filterTypes.filter((v) => v !== type));
    } else {
      return setFilterTypes((prevArray) => [...prevArray, type]);
    }
  };

  const filterButtonBuilder = (type) => {
    const customButtonStyle = () => {
      switch (type) {
        case 'princess':
          if (filterTypes.indexOf(type) !== -1) {
            return {
              ...styles.filterButton,
              borderColor: '#ff2383',
              backgroundColor: '#ff2383',
            };
          } else {
            return {...styles.filterButton, borderColor: '#ff2383'};
          }
        case 'fairy':
          if (filterTypes.indexOf(type) !== -1) {
            return {
              ...styles.filterButton,
              borderColor: '#025efd',
              backgroundColor: '#025efd',
            };
          } else {
            return {...styles.filterButton, borderColor: '#025efd'};
          }
        case 'angel':
          if (filterTypes.indexOf(type) !== -1) {
            return {
              ...styles.filterButton,
              borderColor: '#fb0',
              backgroundColor: '#fb0',
            };
          } else {
            return {...styles.filterButton, borderColor: '#fb0'};
          }
        default:
          break;
      }
    };

    return (
      <TouchableOpacity
        onPress={() => setFilter(type)}
        style={customButtonStyle()}>
        <Text>{type}</Text>
      </TouchableOpacity>
    );
  };

  const idolButtons = listIdols.map((idol, index) => {
    if (filterTypes.indexOf(idolData[idol].type) === -1) {
      return null;
    }
    return <IdolButton key={index} idol={idol} />;
  });

  return (
    <>
      <View>
        <View style={styles.filterButtonArea}>
          {filterButtonBuilder('princess')}
          {filterButtonBuilder('fairy')}
          {filterButtonBuilder('angel')}
        </View>
      </View>
      <ScrollView style={styles.container}>{idolButtons}</ScrollView>
    </>
  );
};

export default IdolSelect;

const styles = StyleSheet.create({
  container: {},

  filterButtonArea: {
    flexDirection: 'row',
  },

  filterButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 15,
    borderWidth: 2,
  },
});
