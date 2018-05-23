movieApp.controller('GenreController', ['MovieService',
function(MovieService) {
  console.log('GenreController Loaded')
  let self = this;

  let movieService = MovieService

  // GET
  self.genres = movieService.genres;
  // ADD
  self.addGenre = movieService.addGenre;
  // DELETE
  self.deleteGenre = movieService.deleteGenre;

  // Conditional for deleting genre
  self.removeGenre = function(genres) {
    if (genres.current_movies > 0) {
      alert(`That genre has movies in it!`);
    } else {
      movieService.deleteGenre(genreId);
    }
}

}]);