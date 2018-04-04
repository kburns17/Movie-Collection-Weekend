swapiApp.controller('SearchController', ['SwapiService',
function(SwapiService) {
  console.log('Search Controller Loaded')
  let self = this;

  let search = SwapiService;
  self.searchObject = search.searchResult
 
    
}]);