(function () {
    'use strict';

    angular.module('BlurAdmin.pages.users', ['BlurAdmin.pages.users.validation'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Utilisateurs',
                sidebarMeta: {
                    icon: 'ion-person',
                    order: 150,
                },
            });
    }

})();
