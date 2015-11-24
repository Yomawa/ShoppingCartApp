app.controller("ShoppingController",["$scope","$http",function($scope, $http){
  
  $scope.view={};
  $http.get('../data.json').then(function(res) {
    console.log(res);
    $scope.view.teas = res.data;
  });
}]);