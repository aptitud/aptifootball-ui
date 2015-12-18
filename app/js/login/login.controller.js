(function() {
  'use strict';

	angular
		.module('footyApp')
		.controller('LoginController', function(LoginService, toastr) {
			var vm = this;
			vm.user = null;

			vm.registerUser = function() {
				LoginService.createUser(vm.user)
					.then(onRegisterUser);
			}

			function onRegisterUser(user) {
  				toastr.success('Created user ' + user.username);
			}

		});

})();