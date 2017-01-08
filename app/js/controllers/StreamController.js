app.controller('StreamController',
 ['$scope','$routeParams','streams','socket',
  function($scope, $routeParams, streams, socket){

    streams.success(function(data){
        $scope.stream = data[$routeParams.streamId];
    });

    $scope.currentStreamsIndex = parseInt($routeParams.streamsId);

    // Operations coming from server
    socket.on('init', function(data){
        $scope.name = data.name;
        $scope.users = data.users;
    });

    socket.on('send:message', function(data){
        console.log("Client receive: " + data);
        $scope.messages.push(data);
    });
    
    $scope.messages = [{user:'bob', text:'this is a sample message'}];

    $scope.sendMessage = function () {
        socket.emit('send:message', {
            text: $scope.message
        });

        $scope.messages.push({
            user: $scope.name,
            text: $scope.message
        });

        $scope.message = '';
    };
    
    // To be changed to select a room from a list of rooms.
    socket.emit('join:room', {room : $routeParams.streamId});
}]);