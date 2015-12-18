(function() {
  'use strict';

  angular
    .module('footyApp')
    .controller('LeagueController', function(LeagueService, toastr) {
      var vm = this;
      vm.league = null;
      vm.leagues = [{"name": "League1", "id": "0"}, {"id": "1", "name": "League2"}];

      vm.registerLeague = function() {
        vm.leagues.push(vm.league.name);
        /*LeagueService.createLeague(vm.user)
          .then(onRegisterLeagueSuccess, onRegisterLeagueFailure);*/
      }

      function onRegisterLeagueSuccess(user) {
        toastr.success('Created user ' + user.username);
      }

      function onRegisterLeagueFailure(error) {
        console.log('Failed to create league ' + JSON.stringify(error))
        toastr.error('Failed to create league! Check browser log for more info...');
      }

    });

})();
