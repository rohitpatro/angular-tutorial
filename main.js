var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", ['$scope', function($scope){
    $scope.welcomeMessage = "Welcome To Angular World";
}]);