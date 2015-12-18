'use strict';

/* Controllers */

var footyApp = angular.module('footyApp', []);

footyApp.controller('AptiFootballCtrl', function($scope, $http) {
    $scope.name = "Name";
//    $http.get('http://localhost:8080/aptifootball/user/list').
//            success(function(data) {
//                $scope.users = data;
//            });

});



function registerUser($scope, $http) {
    var dataObj = {
    	username : 'TG',
    	email : 'email'//$scope.email
    };
    var res = $http.post('http://aptifootball-api.herokuapp.com/aptifootball/user', dataObj);
    		res.success(function(data, status, headers, config) {
            			$scope.message = "Chuck was here";
			});
			res.error(function(data, status, headers, config) {
				alert( "failure message: " + JSON.stringify({data: data}));
			});


}

//function AptiFootball($scope, $http) {
//    $http.get('localhost:8080/aptifootball/user/list').
//        success(function(data) {
//            $scope.users = data;
//        });
//}