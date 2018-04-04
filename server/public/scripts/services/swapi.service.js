swapiApp.service('SwapiService', ['$http', function($http) {
    console.log('SwapiServices is loaded!');
    let self = this;
    self.searchResult = { result: []}//object that will receive info from getInfoFav

    self.getSwapiInfo = function(searchType, searchInfo){
        console.log('Inside getSwapiInfo');

        $http.get('https://swapi.co/api/' + searchType + '/?search=' + searchInfo).then(function(response){
            console.log('Successfully got: ', response.data.results);
            self.searchResult.result = response.data.results;
            
        })
        
    }

    self.getInfoFav = function(){
        console.log('Successfully called getInfoFav');
        
        $http.get('/starwars/favorites').then(function(response){
            console.log('successfully got: ', response);
            
        }).catch(function(error){
            console.log('Error in getting favorites: ', error);
            
        })
    }

    //POST the favorites from the user
    self.postInfo = function(fav){
        console.log('Successfully called postInfo');
        
        $http.post('/starwars/favorites', fav).then(function(response){
            console.log('successfully posted ', fav);
            self.getInfoFav();
            
        }).catch(function(error){
            console.log('Error in posting favorites: ', error);
            
        })
    }

}]);