var app = angular.module("Couchcoop", ['ngRoute']);
  app.config(function($routeProvider){
    $routeProvider 
    .when('/streams', {   /// when on home page set controller to HomeController ///
      controller: "HomeController",
      templateUrl: "js/views/home.html"
    })
    .when('/streams/:streamId',{ /// when stream is selected change to stream view and use StreamController ///
      controller: "StreamController",
      templateUrl: "js/views/stream.html"
    })
    .otherwise({
      redirectTo: "/streams"  /// by default revert to home page ///
    });
  
});

/** 
 *  COMMENTED OUT AS CHAT NOT FUNCTION AT CURRENT TIME
 * var socket = io();

        $('form').submit(function(){
            socket.emit('chat message', $('#m').val());
            $('#m').val('');
            return false;
        });

        socket.on('chat message', function(msg){
            $('#messages').append($('<li>').text(msg));
})
**/
