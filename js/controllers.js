app.controller("ShoppingController",["$scope","$http","$filter","orderService",function($scope, $http,$filter,orderService){
  $scope.items = orderService.getItems();
  $scope.categories = {list: ["", "dark", "cold","awesome","dry", "hot","summer","lucid","warm","spring","winter"]};
  $scope.view={};
  $http.get('../data.json').then(function(res) {
    console.log(res);
    $scope.view.teas = res.data;
  });
    $scope.addItem = function(tea){
      orderService.addItem(tea);
    };
}]);

app.controller("checkoutController",["$scope","orderService",function($scope,orderService){
  $scope.items = orderService.getItems();

 }]);



