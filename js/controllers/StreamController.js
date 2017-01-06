app.controller('StreamController', ['$scope', '$routeParams','streams', function($scope, $routeParams, streams) {
  // Your code here
  streams.success(function(data){
    $scope.stream = data[$routeParams.streamId];
  });

  // Using this property to create the URL in line 9 of views/stream.html
  $scope.currentStreamsIndex = parseInt($routeParams.streamsId);
  
}]);