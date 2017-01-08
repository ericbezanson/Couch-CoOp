app.factory("streams",['$http', function($http){
  return $http.get('js/data/data.json')
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);