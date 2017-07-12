/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('copyme')
    .controller('MainController', MainController);

  MainController.$inject = ['$state'];


  function MainController($state) {

    // 'controller as' syntax
    var vm = this;

    vm.a = 0;
    vm.b = 0;

    vm.doAdd = function() {

      $state.go('add', {
        a: vm.a,
        b: vm.b
      });

    }

    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();
