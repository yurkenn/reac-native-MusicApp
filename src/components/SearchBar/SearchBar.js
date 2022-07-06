import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

export default function SearchBar() {
  return (
    <View>
      <TextInput style={styles.search} placeholder="Ara..." />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#e1e1e1',
    margin: 10,
    borderRadius: 6,
    padding: 5,
    height: 36,
  },
});
