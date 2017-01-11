app.filter('trustUrl', ['$sce', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url); /// filteres url  through $sce.trustAsResource service to prevent interpolation error ///
  };
}]);
