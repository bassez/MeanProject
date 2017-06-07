/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings, $cookies) {
    var whatToWait = [
      preloader.loadAmCharts(),
      $timeout(1000)
    ];

    var theme = themeLayoutSettings;
    if (theme.blur) {
      if (theme.mobile) {
        //whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
      } else {
        //whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
        //whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
      }
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = false;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 2000);

    $rootScope.$isLogged = false;
    $rootScope.$signUp = false;
    $rootScope.$signIn = true;

    $rootScope.toSignUp = () => {
        $rootScope.$signUp = true;
        $rootScope.$signIn = false;
    };
    $rootScope.toSignIn = () => {
          $rootScope.$signIn = true;
          $rootScope.$signUp = false;
      };

    $rootScope.ranks = ["", "Agent", "Detective", "Police Chief"];


    $rootScope.logout = () => {
        console.log("deconnexion");
        $rootScope.$isLogged = false;
        $rootScope.loggedUser = null;
        $cookies.delete("username");
        $cookies.delete("encrypted_password");

    }

    $rootScope.$baSidebarService = baSidebarService;
  }

})();