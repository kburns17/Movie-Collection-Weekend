movieApp.controller('GenreController', ['MovieService',
function(MovieService) {
  console.log('GenreController Loaded')
  let self = this;

  let movieService = MovieService

  self.genres = movieService.genres;
  
  self.addGenre = movieService.addGenre;
}]);