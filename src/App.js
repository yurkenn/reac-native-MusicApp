import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import music_data from './music-data.json';
import SearchBar from './components/SearchBar/SearchBar';
import SongCard from './components/SongCard';

export default function App() {
  const renderSongs = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Music App </Text>
        <SearchBar />
        <FlatList
          data={music_data}
          renderItem={renderSongs}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
