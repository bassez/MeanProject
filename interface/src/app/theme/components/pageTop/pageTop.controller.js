(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.search').controller('pageTopCtrl',  ['$scope', '$rootScope', '$state', 'AuthWrapper', 'toastr', '$location', pageTopCtrl]);

    /** @ngInject */
    function pageTopCtrl($scope, $rootScope, $state, AuthWrapper, toastr, $location) {

        //$scope.searchBar = "";

        $scope.quickSearch = () => {
            $rootScope.$searchBar = $scope.searchBar;
            if ($scope.quick_search) {
                console.log($scope.quick_search)
                $scope.quick_search.$setPristine();
            }
            console.log ($location.path())
            if ($location.path() == "/crimes/search") {
                console.log("reloading page :)")
                $scope.searchBar = "";
                $state.reload();
            }
            $location.path ("crimes/search");

        }

    }
})();
