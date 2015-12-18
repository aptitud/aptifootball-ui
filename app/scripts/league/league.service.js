(function() {
  'use strict';

  angular
    .module('footyApp')
    .service('LeagueService', function($http) {
      this.createLeague = createLeague;


      function getLeagues(userId) {
        return $http.get('http://aptifootball-api.herokuapp.com/aptifootball/league/' + userId)
          .then(onSuccess);
      }

      function getLeague(leagueId) {
          return $http.get('http://aptifootball-api.herokuapp.com/aptifootball/league/' + leagueId)
            .then(onSuccess);
      }

      function createLeague(league) {
        return $http.post('http://aptifootball-api.herokuapp.com/aptifootball/league', league)
          .then(onSuccess);
      }

      function onSuccess(response) {
        return response.data;
      }

    });

})();
