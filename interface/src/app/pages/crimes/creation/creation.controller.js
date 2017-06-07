(function () {
    'use strict';

    angular.module('BlurAdmin.pages.crimes.creation')
        .controller('CreationCtrl', ['$scope', 'AuthWrapper', 'toastr', '$location', CreationCtrl]);

    /** @ngInject */
    function CreationCtrl($scope, AuthWrapper, toastr, $location) {

        $scope.open = open;
        $scope.opened = false;

        $scope.dt = new Date();
        $scope.format = "yyyy-MM-ddThh:mm:ss";

        $scope.form = {
            compnos: null,
            naturecode: null,
            incident_type_description: null,
            main_crimecode: null,
            reptdistrict: null,
            reportingarea: null,
            fromdate: null,
            weapon_type: null,
            shooting: false,
            domestic: false,
            shift: null,
            year: null,
            month: null,
            day_week: null,
            ucrpart: null,
            location: null,
            streetname: null,
            xstreetname: null,
            x: null,
            y: null
        };

        $scope.createCrime = () => {
            $scope.form.fromdate = $scope.dt.toISOString();
            if ($scope.form.compnos == null){
                console.log("oups")
                toastr.error("You must specify a compnos !", "Error");
            }
            else {
                console.log("oups")
                AuthWrapper.postRequest("crime/", $scope.form).then(
                    (d) => {
                        toastr.success(d.data, "Success");
                        $location.path('/crimes/search');
                    },
                    (e) => {
                        toastr.error(e, "Error");
                    }
                )
            }
            console.log($scope.form);
        };

        function open () {
            $scope.opened = true;
        }
    }

})();
