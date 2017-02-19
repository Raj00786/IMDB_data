var imdb = angular.module('imdb', ['ngRoute', 'ngResource']);


imdb.controller('imdb_data', ['$scope','$resource','$routeParams', function($scope,$resource,$routeParams){
    $scope.name="sultan";
    $scope.data1 = 'Movie data will be shown here';
    $scope.search = function(){
	    $scope.imdbapi=$resource('http://imdb.wemakesites.net/api/search', {callback:"JSON_CALLBACK"}, {get:{method:'JSONP'}});
	    $scope.imdbresult=$scope.imdbapi.get({q: $scope.name, api_key:'f6471a2e-2174-4039-8714-2d6a780354be'});
	    console.log($scope.imdbresult);
	    $scope.data1 = $scope.imdbresult;
    };
}]);
