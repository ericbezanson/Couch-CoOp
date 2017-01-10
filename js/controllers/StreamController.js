app.controller('StreamController', ['$scope', '$routeParams','streams', function($scope, $routeParams, streams) {
  streams.success(function(data){
    $scope.stream = data[$routeParams.streamId]; /// set data from stramID selected to $scope via stream using $routeParams ///
  });  
}]);