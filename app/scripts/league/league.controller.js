(function() {
  'use strict';

  angular
    .module('footyApp')
    .controller('LeagueController', function(LeagueService, toastr) {
      var vm = this;
      vm.league = null;

      vm.registerLeague = function() {
        LeagueController.createLeague(vm.user)
          .then(onRegisterUserSuccess, onRegisterUserFailure);
      }

      function onRegisterUserSuccess(user) {
        toastr.success('Created user ' + user.username);
      }

      function onRegisterUserFailure(error) {
        console.log('Failed to create user ' + JSON.stringify(error))
        toastr.error('Failed to create user! Check browser log for more info...');
      }

    });

})();
