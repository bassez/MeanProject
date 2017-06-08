/**
 * Created by MisterGreen on 07/06/2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.search').controller('searchCtrl',  ['$scope', 'AuthWrapper', searchCtrl]);

    /** @ngInject */
    function searchCtrl($scope, AuthWrapper, toastr) {

        $scope.getAllCrimes = () => {
            AuthWrapper.getRequest("crimes", {}).then(function (res) {
                console.log("RESSSSS", res);
                $scope.crimes = res.data;
            });
        };

        $scope.getAllCrimes();
    }
})();
