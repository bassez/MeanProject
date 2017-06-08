(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crimes.creation', [])
      .config(routeConfig)

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crimes.creation', {
          url: '/creation',
            controller: 'CreationCtrl',
          templateUrl: 'app/pages/crimes/creation/creation.html',
            title: 'Saisir nouveau',
            sidebarMeta: {
                icon: 'ion-plus-round',
                order: 500,
            },
        });
  }

})();
