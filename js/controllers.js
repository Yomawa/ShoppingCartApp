app.controller("ShoppingController",["$scope","$http","$filter","orderService",function($scope, $http,$filter,orderService){
  $scope.items = orderService.getItems();
  $scope.categories = {list: ["", "dark", "cold","awesome","dry", "hot","summer","lucid","warm","spring","winter"]};
  $scope.view={};
  $http.get('../data.json').then(function(res) {
    console.log(res);
    $scope.view.teas = res.data;
  });
  $scope.itemQty = orderService.getQty();
  $scope.addItem = function(tea){
    orderService.addItem(tea);
    $scope.itemQty = orderService.getQty();
  };
}]);

app.controller("checkoutController",["$scope","orderService",function($scope,orderService){
  $scope.items = orderService.getItems();
  $scope.orderTotal = orderService.getOrderTotal();

 }]);



