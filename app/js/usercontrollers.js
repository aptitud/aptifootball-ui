'use strict';

/* Controllers */

var footyApp = angular.module('footyApp', []);

footyApp.controller('AptiFootballCtrl', function($scope, $http) {
    $scope.name = "Name";

    $http.get('http://localhost:8080/aptifootball/user/list').
            success(function(data) {
                $scope.users = data;
            });

});

footyApp.controller('UserCtrl', function($scope, $http) {
    $scope.username = "";
    $scope.submitNewUser = function() {
                // do some submitting
    };

});

//function AptiFootball($scope, $http) {
//    $http.get('localhost:8080/aptifootball/user/list').
//        success(function(data) {
//            $scope.users = data;
//        });
//}