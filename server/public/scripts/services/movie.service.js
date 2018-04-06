movieApp.service('MovieService', ['$http', function($http) {
    console.log('MovieService is loaded!');
    let self = this;
    
//need to create an object containing an array of movies
self.movies = { list: [] };

// GET movies
self.getMovies = function() {
    console.log('In GET movies');
    $http.get('/movies').then(function(response){
        self.movies.list = response.data;
    })
}; // end GET movies


// ADD movie
self.addMovie = function(movie) {
    console.log('in ADD movie', movie);
    $http.post('/movies', movie).then(function(response){
        console.log('movie posted');
        self.getMovies();
     }).catch(function(error){
         console.log('error posting', error);
     });
} //end ADD movie


// DELETE movie
self.deleteMovie = function(movie) {
    console.log('in DELETE', movie);
    $http.delete('/movies/' + movie.id).then(function(response) {
        console.log('movie deleted');
        self.getMovies();
    }).catch(function(error){
        console.log('error posting', error);
    });
} //end DELETE movie


self.getMovies();
   

}]); // end Movie Service