(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users')
      .controller('MsgCenterCtrl', ['$scope', 'AuthWrapper', 'toastr', MsgCenterCtrl]);

  /** @ngInject */
  function MsgCenterCtrl($scope, AuthWrapper, toastr) {
    console.log("coucou");
    $scope.validations = [
      {
        username: 'TheSuperUserTruc',
        email: 'tsut@bitch.com',
          rank: 1
      },
        {
            username: 'anonymous',
            email: 'iam@home.posey',
            rank: 2
        },
        {
            username: 'Albert Einstein',
            email: 'ae@space.time',
            rank: 2
        }
    ];

    $scope.validationsCount = $scope.validations.length;
    $scope.acceptAll = () => {
      for (let i in $scope.validations)
          $scope.acceptUser($scope.validations[i])
    };
    $scope.acceptUser = (user) => {
      AuthWrapper.getRequest("user/" + 1).then(
          (d) => {
              toastr.success("User was successfully validated !", 'Success');
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