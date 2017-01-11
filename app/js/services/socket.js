app.factory('socket', function ($rootScope){
   
    // Initialize the connection to the server
    var socket = io.connect();

    // Gives the client basic socket operations
    // Telling angular to update after each operation
    return {
        on: function (eventName, callback) {
        socket.on(eventName, function(){
            var args = arguments;
            $rootScope.$apply(function () {
                callback.apply(socket, args);
            })
        })
        },
        emit: function(eventName, data, callback) {
        socket.emit(eventName, data, function (){
            var args = arguments;
            $rootScope.$apply(function () {
                if (callback) {
                    callback.apply(socket,args);
                }
            });
        })
        },
    }
});