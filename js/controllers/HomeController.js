app.controller('HomeController', ['$scope', 'streams', function($scope, streams) {
	streams.success(function(data){
    $scope.myStreams = data;
  });
}]);