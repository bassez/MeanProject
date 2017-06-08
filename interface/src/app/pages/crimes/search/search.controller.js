(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.search').controller('searchCtrl',  ['$scope', '$rootScope', 'AuthWrapper', 'toastr', '$location', searchCtrl]);

    /** @ngInject */
    function searchCtrl($scope, $rootScope, AuthWrapper, toastr, $location) {

        $scope.pending = false;
        $scope.crimes = [];

        $scope.getAllCrimes = () => {
            $scope.pending = true;
            AuthWrapper.getRequest("crimes", {}).then(function (res) {
                console.log("ALL RESSSSS", res);
                $scope.crimes = res.data;
                $scope.pending = false;
                $scope.done = true;
            });
        };

        $scope.goToDetails = (crime) => {
            $location.path("crimes/details/" + crime._id)
        };
        $scope.quickSearch = () => {
            $scope.searchbar = $rootScope.$searchBar;
            console.log ($scope.searchbar)
            if (!$scope.searchbar || $scope.searchbar == "") {
                console.log("empty search")

                $scope.getAllCrimes();
            }
            else {
                $scope.pending = true;
               let fields =  {
                    compnos: parseInt($scope.searchbar),
                    naturecode: $scope.searchbar,
                    incident_type_description: $scope.searchbar,
                    main_crimecode: $scope.searchbar,
                    reptdistrict: $scope.searchbar,
                    reportingarea: parseInt($scope.searchbar),
                    fromdate: $scope.searchbar,
                    weapontype: $scope.searchbar,
                    shooting: $scope.searchbar,
                    domestic: $scope.searchbar,
                    shift: $scope.searchbar,
                    year: parseInt($scope.searchbar),
                    month: parseInt($scope.searchbar),
                    day_week: $scope.searchbar,
                    ucrpart: $scope.searchbar,
                    x: parseFloat($scope.searchbar),
                    y: parseFloat,
                    streetname: $scope.searchbar,
                    xstreetname: $scope.searchbar,
                    location: $scope.searchbar
                };
                AuthWrapper.postRequest("crimes/search", fields).then(function (res) {
                    console.log("RESSSSS", res);
                    $scope.crimes = res.data;
                    $scope.pending = false;
                });
            }
        }

        $scope.quickSearch();
    }
})();
