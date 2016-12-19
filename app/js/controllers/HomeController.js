app.controller("HomeController", ['$scope','$location', function($scope,$location){

    $scope.func = function(){
        $location.url('/stream');
    }
}]);