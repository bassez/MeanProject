/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.auth')
        .directive('loginForm', loginForm);

    /** @ngInject */
    function loginForm() {
        return {
            restrict: 'E',
            templateUrl: 'app/auth/views/auth.view.html',
        };
    }

})();
