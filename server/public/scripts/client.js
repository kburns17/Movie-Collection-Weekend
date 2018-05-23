let movieApp = angular.module("movieApp", ['ngRoute', 'ngMaterial']);

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
        {redirectTo: '/genres'}
    );


}); // end route provider

// config for Angular Buttons
movieApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('blue');
 });