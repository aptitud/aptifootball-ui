(function() {
  'use strict';

	angular
		.module('footyApp')
		.service('LoginService', function($http) {
			this.createUser = function(user) {
                return $http.post('http://aptifootball-api.herokuapp.com/aptifootball/user', user)
                    .then(onSuccess, onFailure);
			}

            function onSuccess(response) {
                return response.data;
            }

            function onFailure(data) {
                alert("failure message: " + JSON.stringify({data: data}));
            }

		});

})();