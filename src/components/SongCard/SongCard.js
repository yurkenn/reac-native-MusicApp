import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from './SongCard.style';

const SongCard = ({song}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{song.title}</Text>

        <View style={styles.info_container}>
          <Text style={styles.artists}>{song.artist}</Text>
          <Text style={styles.year}>{song.year}</Text>
        </View>
        <View style={styles.soldOut_container}>
          <Text style={styles.soldOut}>
            {song.isSoldOut === true ? '' : 'TÜKENDİ'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
