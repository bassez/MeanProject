/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crimes', ['BlurAdmin.pages.crimes.details',
                                            'BlurAdmin.pages.crimes.creation',
                                            'BlurAdmin.pages.crimes.edition',
                                            'BlurAdmin.pages.crimes.search'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crimes', {
          url: '/crimes',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Crimes',
          sidebarMeta: {
            icon: 'ion-ios-box',
            order: 150,
          },
        });
  }

})();
