/// <reference path="../../typings/tsd.d.ts" />
 class RouterConfig {
    
    constructor($stateProvider: angular.ui.IStateProvider,
         $urlRouterProvider: angular.ui.IUrlRouterProvider) {
      
      $stateProvider        
        .state('login', {
          url: '/login',
          templateUrl: 'auth/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'loginVm'
        })
        .state('main', {
          url: '/main',
          templateUrl: 'main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'mc'
        })

      //$urlRouterProvider.otherwise('main');
    }

  }

export {RouterConfig}