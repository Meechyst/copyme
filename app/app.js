/**
 *
 * AngularJS copyme
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 *
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('copyme', [
      'ui.router'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$stateProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($stateProvider) {


    // routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('calc', {
        url: '/calc',
        templateUrl: 'views/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('setup', {
        url: '/setup',
        templateUrl: 'views/setup.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('add', {
        url: '/add/{a:[0-9]+}/{b:[0-9]+}',
        templateUrl: 'views/result.html',
        controller: 'addController',
        controllerAs: 'add'
      })
      .state('otherwise', {
        url: '*path',
        template: 'No path available'
      });

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   *
   */
  angular
    .module('copyme')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('copyme')
    .run(run);

  run.$inject = ['$rootScope'];

  function run($rootScope) {

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams, options){
      console.log('asd');


    });

    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams){
      console.log('fsa');

    });

  }


})();
