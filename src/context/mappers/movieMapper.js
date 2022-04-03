export const mapRemoteMovieList = (remoteResponse) => {
  const mappedData = remoteResponse.map((item) => ({
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    type: item.Type,
    poster: item.Poster,
  }));

  return mappedData;
};
