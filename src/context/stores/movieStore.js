import { flow, makeAutoObservable } from 'mobx';
import { mapRemoteMovieList } from 'context/mappers/movieMapper';
import ApiService from '../../common/api/ApiService';

class MovieStore {
  movieList = [];
  currentPage = 1;
  isLastPage = false;
  isLoading = false;
  isLoadingMore = false;

  constructor() {
    makeAutoObservable(this, {
      fetchMovieList: flow,
    });
  }

  setMovieList(movieList) {
    this.movieList = movieList;
  }

  setCurrentPage(currentPage) {
    this.currentPage = currentPage;
  }

  setIsLastPage(isLastPage) {
    this.isLastPage = isLastPage;
  }

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setIsLoadingMore(isLoadingMore) {
    this.isLoadingMore = isLoadingMore;
  }

  *fetchMovieList(page) {
    if (this.isLastPage && this.currentPage !== 1) {
      return;
    }

    try {
      if (page === 1) {
        yield this.setIsLoading(true);
      } else {
        yield this.setIsLoadingMore(true);
      }

      const movieListRemote = yield ApiService.get(`s=car&page=${page}`);

      if (movieListRemote.length === 0) {
        yield this.setIsLastPage(true);
      } else {
        const mappedMovieList = mapRemoteMovieList(movieListRemote.Search);

        if (page === 1) {
          yield this.setMovieList(mappedMovieList);
        } else {
          yield this.setMovieList([...this.movieList, ...mappedMovieList]);
        }

        yield this.setCurrentPage(page);
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (page === 1) {
        yield this.setIsLoading(false);
      } else {
        yield this.setIsLoadingMore(false);
      }
    }
  }
}

export default MovieStore;
