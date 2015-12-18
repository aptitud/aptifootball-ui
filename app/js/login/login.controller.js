(function() {
  'use strict';

  angular
    .module('footyApp')
    .controller('LoginController', function(LoginService, toastr) {
      var vm = this;
      vm.user = null;

      vm.registerUser = function() {
        LoginService.createUser(vm.user)
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
