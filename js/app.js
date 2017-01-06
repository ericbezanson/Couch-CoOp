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

var socket = io();

        $('form').submit(function(){
            socket.emit('chat message', $('#m').val());
            $('#m').val('');
            return false;
        });

        socket.on('chat message', function(msg){
            $('#messages').append($('<li>').text(msg));
})