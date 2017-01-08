var app = angular.module("Couchcoop", ['ngRoute']);

app.filter('trustUrl', ['$sce', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);
app.config(function($routeProvider){
  $routeProvider 
  .when('/streams', {
    controller: "HomeController",
    templateUrl: "js/views/home.html"
  })
  .when('/streams/:streamId',{
    controller: "StreamController",
    templateUrl: "js/views/stream.html"
  })
  .otherwise({
    redirectTo: "/streams"
  });
  
});

/** var socket = io();

        $('form').submit(function(){
            socket.emit('chat message', $('#m').val());
            $('#m').val('');
            return false;
        });

        socket.on('chat message', function(msg){
            $('#messages').append($('<li>').text(msg));
})
**/
