movieApp.service('MovieService', ['$http', function($http) {
    console.log('MovieService is loaded!');
    let self = this;
    
//object containing an array of movies
self.movies = { list: [] };

//object containing genres as array
self.genres = { list: [] };


// GET-movies
self.getMovies = function() {
    $http.get('/movies').then(function(response){
        self.movies.list = response.data;
    }).catch((error) => {
        console.log('error', error);
    })
}; // end GET movies


// ADD-movie
self.addMovie = function(movie) {
    console.log('ADD', movie);
    $http.post('/movies', movie).then(function(response){
        console.log('movie posted');
        self.getMovies();
     }).catch(function(error){
         console.log('error posting', error);
     });
}; //end ADD movie


// DELETE-movie
self.deleteMovie = function(movie) {
    $http.delete('/movies/' + movie.id).then(function(response) {
        self.getMovies();
    }).catch(function(error){
        console.log('error posting', error);
    });
} //end DELETE movie

//GET-genre
self.getGenres = function() {
    console.log('in GET genres');
    $http.get('/genres').then(function(response){
        self.genres.list = response.data;
    }).catch((error) => {
        console.log('error', error);
    })
}; //end GET for Genres

//ADD-genre
self.addGenre = function(genre) {
    console.log('in ADD genre');
    $http.post('/genres', genre).then(function(response) {
        self.getGenres();
    }).catch(function(error) {
        console.log('error posting genre', error);
    })
}; // end ADD-genre

// DELETE-genre
self.deleteGenre = function(genre) {
    console.log('in DELETE genre');
    $http.delete('/genres/' + genre.id).then(function(response) {
        console.log('genre deleted');
        self.getGenres();
    }).catch(function(error) {
        console.log('error deleting genre', error);
    });
}; //end DELETE genre

//function to loop through and add to DOM
self.getMovies();
self.getGenres();


}]); // end Movie Service