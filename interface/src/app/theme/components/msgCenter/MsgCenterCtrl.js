(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users')
      .controller('MsgCenterCtrl', ['$scope', 'AuthWrapper', 'toastr', MsgCenterCtrl]);

  /** @ngInject */
  function MsgCenterCtrl($scope, AuthWrapper, toastr) {
    console.log("coucou");
    $scope.validations = [];

    AuthWrapper.getRequest("users/pending/").then(
        (d)=>{
            $scope.validations = d.data;
            $scope.validationsCount = $scope.validations.length;
        },
        (e)=>{
            toastr.error(e, "Error");
        });

    $scope.validationsCount = $scope.validations.length;

    $scope.acceptAll = () => {
      for (let i in $scope.validations)
          $scope.acceptUser($scope.validations[i])
    };

    $scope.acceptUser = (user) => {
      AuthWrapper.getRequest("user/" + user._id + "/validate").then(
          (d) => {
              toastr.success(d.data, 'Success');
              $scope.validations.splice($scope.validations.indexOf(user), 1);
              $scope.validationsCount = $scope.validations.length;
          },
          (e) => {
              toastr.error(e.data, 'Error');
          }
      )
    };

    $scope.removeUser = (user) => {
        AuthWrapper.deleteRequest("user/" + user._id).then(
        (d) => {
            toastr.success(d.data, 'Success');
            $scope.validations.splice($scope.validations.indexOf(user), 1);
            $scope.validationsCount = $scope.validations.length;
        },
        (e) => {
            toastr.error(e.data, 'Error');
        }
    )
    };
  }
})();