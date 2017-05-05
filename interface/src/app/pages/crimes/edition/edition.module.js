/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crimes.edition', [])
      .config(routeConfig)

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crimes.edition', {
          url: '/crimes/edition',
          templateUrl: 'app/pages/crimes/edition/edition.html',
        });
  }

})();
