(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.details')
        .controller('DetailsCtrl', ['$scope', 'AuthWrapper', 'toastr', '$location', '$state', DetailsCtrl]);

    /** @ngInject */
    function DetailsCtrl($scope, AuthWrapper, toastr, $location, $state) {
        AuthWrapper.getRequest("crime/" + $state.params.id).then (
            (d) => {
              $scope.crime = d.data;
                $scope.crime.shooting = $scope.crime.shooting.toLowerCase() == "true";
                $scope.crime.domestic = $scope.crime.domestic.toLowerCase() == "true";
                console.log(d.data);
            },
            (e) => {
                console.log(e)
                toastr.error(e, "Error");
            }
        )
        $scope.toCrimeEdition = () => {
            $location.path("crimes/update/"+ $state.params.id);
        }
    }

})();
