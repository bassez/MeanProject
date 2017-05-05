/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users.validation')
    .controller('ValidationCtrl', ValidationCtrl);

  /** @ngInject */
  function ValidationCtrl($stateParams,  mailMessages) {
    var vm = this;
    vm.messages = vm.messages = [{
        id: "4563faass",
        name: "Nasta Linnie",
        subject: "Great text",
        date: "2015-08-28T07:57:09",
        body: $sce.trustAsHtml("<p>Hey John, </p><p>Check out this cool text.</p>"),
        pic: "img/Nasta.png",
        email: "petraramsey@mail.com",
        attachment: "poem.txt",
        position: "Great Employee",
        tag: "friend",
        labels: ['inbox']
    },
    ]
    vm.label = $stateParams.label;
  }

})();
