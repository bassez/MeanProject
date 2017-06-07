(function () {
    'use strict';

    angular.module('BlurAdmin.auth')
        .controller('RegisterCtrl',  ['$scope', '$rootScope', 'AuthWrapper', 'toastr', RegisterCtrl]);

    /** @ngInject */
    function RegisterCtrl($scope, $rootScope, AuthWrapper, toastr) {
        $scope.form = {
            username: null,
            password: null,
            rpass: null,
            mail: null,
            rank: null
        };

        $scope.signUp = () => {
            let data = {
                mail: $scope.form.mail,
                name: $scope.form.username,
                pass: $scope.form.password,
                rank: $rootScope.ranks.indexOf($scope.form.rank)
            };



            if (!data.mail || !data.name || !data.pass || data.rank == -1)
                $scope.formEmpty = true;
            else{
                if ($scope.form.password != $scope.form.rpass)
                    $scope.passwordNotMatch = true;
                else {
                    $scope.passwordNotMatch = false;
                    $scope.formEmpty = false;
                    AuthWrapper.postRequest("user", data).then(
                        (d)=>{
                            toastr.success(d.data, 'Success');
                        },
                        (e) => {
                            toastr.error(e, 'Error');
                        })
                }

            }


        }
    }

})();
