(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.search', [])
        .config(routeConfig)

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('crimes.search', {
                url: '/search',
                controller: 'searchCtrl',
                templateUrl: 'app/pages/crimes/search/search.html'
            });
    }
})();
