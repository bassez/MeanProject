(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.edition')
        .controller('EditionCtrl', ['$scope', 'AuthWrapper', 'toastr', '$location', '$state', EditionCtrl]);

    /** @ngInject */
    function EditionCtrl($scope, AuthWrapper, toastr, $location, $state) {
        $scope.form = {};

        $scope.format = "yyyy-MM-ddTHH:mm:ss";


        AuthWrapper.getRequest("crime/" + $state.params.id).then (
            (d) => {
                console.log(d.data);
                $scope.form = d.data
                $scope.form.year = parseInt($scope.form.year);
                $scope.form.month = parseInt($scope.form.month);
                $scope.form.reportingarea = parseInt($scope.form.reportingarea);
                $scope.dt = new Date($scope.form.fromdate);
            },
            (e) => {
                console.log(e);
                toastr.error(e, "Error");
            }
        );

        $scope.updateCrime = () => {
            AuthWrapper.putRequest("crime/" + $state.params.id, $scope.form).then (
                (d) => {
                    console.log(d.data);
                    toastr.success(d.data, "Success")
                },
                (e) => {
                    console.log(e)
                    toastr.error(e, "Error");
                }
            )
        };
    }

})();
