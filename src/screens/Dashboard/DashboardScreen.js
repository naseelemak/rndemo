import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useStore } from 'common/setup/rootStore';
import { observer } from 'mobx-react-lite';
import MovieList from './MovieList/MovieList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

const DashboardScreen = () => {
  const { authStore, movieStore } = useStore().rootStore;
  const [isFirstPageLoaded, setIsFirstPageLoaded] = React.useState(false);
  const [, setCurrentPage] = React.useState(1);

  const handleLogOut = () => {
    console.log('Logging out');
    authStore.onLogOut();
  };

  const onRefresh = () => {
    movieStore.setIsLastPage(false);
    setCurrentPage(1);
    setIsFirstPageLoaded(false);
  };

  // TODO: Improve this. Temporarily implemented this way because it was spam calling the API
  React.useEffect(() => {
    if (!isFirstPageLoaded) {
      movieStore.fetchMovieList(1);
      setIsFirstPageLoaded(true);
    }
  }, [movieStore, isFirstPageLoaded]);

  const handleLoadMore = () => {
    if (!movieStore.isLastPage) {
      setCurrentPage((prev) => {
        movieStore.fetchMovieList(prev + 1);
        return prev + 1;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Log Out"
        onPress={handleLogOut}
        disabled={authStore.isLoading}
      />
      <View style={{ paddingVertical: 10 }} />
      <MovieList
        movieData={movieStore.movieList}
        onRefresh={onRefresh}
        onLoadMore={handleLoadMore}
        isLoading={movieStore.isLoading}
      />
    </View>
  );
};

const DashboardWrapped = observer(DashboardScreen);

export default DashboardWrapped;
