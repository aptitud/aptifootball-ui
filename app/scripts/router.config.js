(function() {
  'use strict';

  angular
    .module('footyApp')
    .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/partials/user/user.html',
        controller: 'UserController as vm'
      })

      .state('leauge', {
        url: '/leauge',
        templateUrl: 'app/partials/leauge/leauge.html',
        controller: 'LeaugeController as vm'
      })

    $urlRouterProvider.otherwise('/user');
  };

  angular
    .module('footyApp')
    .run(function($state, $rootScope) {
      $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

})();
