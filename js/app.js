var app = angular.module("Couchcoop", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider 
  .when('/', {
    controller: "HomeController",
    templateUrl: "js/views/home.html"
  })
  .when('/stream',{
    controller: "",
    templateUrl: ""
  })
  .otherwise({
    redirectTo: "/"
  });
  
});