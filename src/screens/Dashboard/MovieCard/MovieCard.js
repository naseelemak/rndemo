import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieCard: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 130,
    maxHeight: 130,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 12,

    // box shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // -- box shadows
  },
  movieName: {
    marginTop: 5,
    color: '#0366d6',
    fontSize: 22,
  },
  movieDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#808080',
  },
});

const MovieCard = ({ item }) => {
  const { title, year } = item;

  return (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => {
        () => {};
      }}
    >
      <View style={styles.container}>
        <Text style={styles.movieName} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text
          style={styles.movieDescription}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {year}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
