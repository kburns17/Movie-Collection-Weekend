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


// ADD movies

self.getMovies();
    

}]); // end Movie Service