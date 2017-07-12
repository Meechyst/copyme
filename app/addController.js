
(function() {

  angular
    .module('copyme')
    .controller('addController', addController);

  addController.$inject = ['$stateParams', '$state'];


  function addController($stateParams, $state) {

    var vm = this;

    vm.a = 0;
    vm.b = 0;

    vm.goBack = function functionName() {
      $state.go('calc');

    }

    if ($stateParams.a) {
      vm.a = $stateParams.a
    };
    if ($stateParams.b) {
      vm.b = $stateParams.b
    };

    vm.result = parseInt(vm.a) + parseInt(vm.b);
}

})();
