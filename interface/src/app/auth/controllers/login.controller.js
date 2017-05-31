(function () {
    'use strict';

    angular.module('BlurAdmin.auth')
        .controller('LoginCtrl', ['$scope', '$rootScope', '$cookies', 'AuthWrapper', 'toastr', LoginCtrl]);

    /** @ngInject */
    function LoginCtrl($scope, $rootScope, $cookies, AuthWrapper, toastr) {
        console.log("controller");
        $scope.loginAction = function() {
            console.log($scope.username + ":" + $scope.password);
            AuthWrapper.login($scope.username, $scope.password).then(
                function() {
                    $rootScope.$isLogged = true;
                    toastr.success("You have successfully logged in !", 'Welcome');
                },
                function (e) {
                    toastr.error(e.data, 'Error');
                    $rootScope.$isLogged = false;
                    console.log({error : e.data})
                }
            );
        }
    }

})();
