(function() {
  'use strict';

  angular
    .module('footyApp')
    .service('PingService', function($http) {
      this.ping = ping;

      function ping() {
        console.log("ping...");
        return $http.get('http://aptifootball-api.herokuapp.com/aptifootball/user/list');
      }

    });

})();
