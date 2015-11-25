app.controller("ShoppingController",["$scope","$http","$filter",function($scope, $http,$filter){
  
  $scope.categories = {};
  //$scope.searchText = ""; 
  $scope.view={};
  $http.get('../data.json').then(function(res) {
    console.log(res);
    $scope.view.teas = res.data;
  });
}]);