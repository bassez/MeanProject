/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crimes.search', [])
      .config(routeConfig)

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crimes.search', {
          url: '/crimes/search',
          templateUrl: 'app/pages/crimes/search/search.html',
        });
  }

})();
