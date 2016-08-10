var app = angular.module('BandApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {	//funciona sobre la url raíz
		templateUrl: 'views/homeView.html',
		controller: 'HomeViewController'
	})
	.when('/:decade', {	//funciona sobre la url raíz
		templateUrl: 'views/homeView.html',
		controller: 'HomeViewController'
	})

	.when('/band/:name', {
		templateUrl: 'views/eachbandView.html',
		controller: 'BandViewController'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'HomeViewController'
	})
	.otherwise({
		redirectTo: '/'
	})
}])

app.factory('Home', function() {
	
});



app.controller('HomeViewController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){
	$scope.name = $routeParams.name;
	$scope.decade = $routeParams.decade;

	$http.get("js/bands.json").success(function(data){
		$scope.bands = data;
	})
}]);

app.controller('BandViewController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	  $scope.name = $routeParams.name;
	  $http.get("js/bands.json").success(function(data){
		$scope.bands = data;
	})

	}]);

app.directive('headerView', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/headerView.html'
	}
});


