let movieApp = angular.module("movieApp", ['ngRoute']);

movieApp.config(function($routeProvider){
    console.log('config loaded');
    
    $routeProvider
    .when('/movies', {
        templateUrl: '/views/movies.html',
        controller: 'MovieController as vm'
    }).when('/genres', {
        templateUrl: '/views/genres.html',
        controller: 'GenreController as vm'
    }).otherwise(
        {redirectTo: '/movies'}
    );


}); // end route provider