app.controller('StreamController', [
    '$scope',
    '$routeParams',
    'streams',
    'socket',
    'usermeta',

    function($scope, $routeParams, streams, socket, usermeta) {

    $scope.username = usermeta.getUsername();

    streams.success(function(data){
        $scope.stream = data[$routeParams.streamId]; /// set data from stramID selected to $scope via stream using $routeParams ///
    });

    $scope.currentStreamsIndex = parseInt($routeParams.streamsId);

    socket.on('send:message', function(data){
        $scope.messages.push({
            username: data.username,
            message: data.message
        });
    }); // Add message to local chat view


    $scope.messages = []; // Default messages

    // Operations given to the client
    $scope.sendMessage = function () {
        var msg = {
            username: $scope.username,
            message: $scope.message
        };

        socket.emit('send:message', msg); // send message to server
        $scope.messages.push(msg); // Add message to local chat view

        $scope.message = ''; // empty the message box
    };

    // Creates a new room based on the streamId
    socket.emit('join:room', {room : $routeParams.streamId});
}]);
