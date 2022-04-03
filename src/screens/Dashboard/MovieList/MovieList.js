import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Loader from '../../../common/ui/Loader/Loader';
import MovieCard from '../MovieCard';

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  noMovies: {
    flex: 1,
    marginTop: 40,
  },
  noMoviesText: {
    fontSize: 16,
  },
});

const renderItem = (item) => {
  return <MovieCard item={item} />;
};

const renderFooter = (isLoading) => {
  return isLoading && <Loader />;
};

// to display when there are no movies available
const NoMovies = () => (
  <View style={styles.noMovies}>
    <Text style={styles.noMoviesText}>No movies to display</Text>
  </View>
);

const MovieList = ({
  movieData,
  onRefresh,
  onLoadMore,
  isLoading,
  isLoadingMore,
}) => (
  <View style={styles.flatListContainer}>
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={movieData}
      renderItem={({ item }) => {
        return renderItem(item);
      }}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={NoMovies}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter(isLoadingMore)}
      onRefresh={onRefresh}
      refreshing={isLoading}
      showsVerticalScrollIndicator={true}
    />
  </View>
);

export default MovieList;
