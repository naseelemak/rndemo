import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 580,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  touchableOpacity: {
    // box shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // necessary for android shadows
    elevation: 5,
    // -- box shadows
  },
  movieName: {
    marginTop: 5,
    color: '#474747',
    fontSize: 22,
    fontWeight: '600',
  },
  movieYear: {
    marginTop: 5,
    fontSize: 14,
    color: '#808080',
  },
  moviePoster: {
    flex: 1,
  },
});

const MovieCard = ({ item }) => {
  const { title, year } = item;

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => {
        () => {};
      }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.movieName} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.movieYear} ellipsizeMode="tail">
            {year}
          </Text>
        </View>
        <View style={{ paddingVertical: 5 }} />
        <Image
          style={styles.moviePoster}
          source={{
            uri: item.poster,
          }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
