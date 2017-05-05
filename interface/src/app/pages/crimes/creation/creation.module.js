/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crimes.creation', [])
      .config(routeConfig)

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crimes.creation', {
          url: '/crimes/creation',
          templateUrl: 'app/pages/crimes/creation/creation.html',
            title: 'Saisir nouveau',
            sidebarMeta: {
                icon: 'ion-ios-location-outline',
                order: 500,
            },
        });
  }

})();
