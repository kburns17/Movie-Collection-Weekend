movieApp.controller('MovieController', ['MovieService',
function(MovieService) {
  console.log('Movie Controller Loaded')
  let self = this;

  let movieService = MovieService;
  self.movies = movieService.movies;
  self.addMovie = movieService.addMovie;
  self.deleteMovie = movieService.deleteMovie;
}]); // end Movie Controller