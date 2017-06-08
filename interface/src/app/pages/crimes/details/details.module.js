(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crimes.details', [])
      .config(routeConfig)

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crimes.details', {
          url: '/details/:id',
          controller: 'DetailsCtrl',
            title: 'Crime details',
          templateUrl: 'app/pages/crimes/details/details.html',
        });
  }

})();
