/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users.validation')
    .controller('ValidationCtrl', ValidationCtrl);

  /** @ngInject */
  function ValidationCtrl($scope) {
      $scope.messages = [{name: "truc"}, {name: "bidule"}, {name: "machin"}, {name: "chose"}]
  }

})();
