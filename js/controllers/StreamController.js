app.controller('StreamController', ['$scope', '$routeParams','streams', function($scope, $routeParams, streams) {
  // Your code here
  home.success(function(data){
    $scope.streams = data[$routeParams.homeId];
  });

  // Using this property to create the URL in line 9 of views/stream.html
  $scope.currentStreamsIndex = parseInt($routeParams.streamsId);
  
}]);