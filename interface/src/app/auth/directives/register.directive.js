(function () {
    'use strict';

    angular.module('BlurAdmin.auth')
        .directive('registerForm', registerForm);

    /** @ngInject */
    function registerForm() {
        return {
            restrict: 'E',
            templateUrl: 'app/auth/views/reg.view.html',
        };
    }

})();
