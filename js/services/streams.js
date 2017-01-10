app.factory("streams",['$http', function($http){
  return $http.get('js/data/data.json')  /// send a get request to json data file ///
  .success(function(data){  // return data uppon successful get
    return data;
  })
  .error(function(err){
    return err;
  });
}]);