app.controller('StreamController',
 ['$scope','$routeParams','streams','socket',
  function($scope, $routeParams, streams, socket){

    streams.success(function(data){
        $scope.stream = data[$routeParams.streamId]; /// set data from stramID selected to $scope via stream using $routeParams ///
    });

    $scope.currentStreamsIndex = parseInt($routeParams.streamsId);
    
    socket.on('send:message', function(data){
        $scope.messages.push(data);
    }); // Add message to local chat view
    
    
    $scope.messages = []; // Default messages

    // Operations given to the client
    $scope.sendMessage = function () {

        socket.emit('send:message', { 
            text: $scope.message
        }); // send message to server

        $scope.messages.push({  
            user: $scope.name,
            text: $scope.message
        }); // Add message to local chat view

        $scope.message = ''; // empty the message box
    };
    
    // Creates a new room based on the streamId
    socket.emit('join:room', {room : $routeParams.streamId});
}]);