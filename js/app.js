var app = angular.module("shoppingApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'partials/home.html',
        controller: "ShoppingController"
      })
      .when('/checkout',{
        templateUrl: 'partials/checkout.html',
        controller: "checkoutController"
      });
});