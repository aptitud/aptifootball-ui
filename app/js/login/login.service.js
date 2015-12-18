(function() {
  'use strict';

  angular
    .module('footyApp')
    .service('LoginService', function($http) {
      this.createUser = createUser;

      function createUser(user) {
        return $http.post('http://aptifootball-api.herokuapp.com/aptifootball/user', user)
          .then(onSuccess);
      }

      function onSuccess(response) {
        return response.data;
      }

    });

})();
