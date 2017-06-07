/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users.validation', [])
      .config(routeConfig)

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users.validation', {
          url: '/users/validation',
            controller: 'ValidationCtrl',
          templateUrl: 'app/pages/users/validation/validation.html',
            title: 'Validations',
            sidebarMeta: {
                icon: 'ion-ios-location-outline',
                order: 500,
            },
        });
  }

})();
