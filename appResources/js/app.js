
var myAppModule = angular.module('myApp', ['ngRoute']);



myAppModule.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'home.html',
            controller: function(){

                console.log("home-page loaded!");
            }
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);