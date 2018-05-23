movieApp.controller('MovieController', ['MovieService',
function(MovieService) {
  console.log('Movie Controller Loaded')
  let self = this;

  let movieService = MovieService;

  // GET
  self.movies = movieService.movies;
  // ADD
  self.addMovie = movieService.addMovie;
  // DELETE
  self.deleteMovie = movieService.deleteMovie;
  // GET genres added to loop and display genre choices on movie view
  self.genres = movieService.genres;
}]); // end Movie Controller