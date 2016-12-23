(function () {

  angular.module('blogApp', ['ngRoute']);

  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      
      .otherwise({redirectTo: '/'});
  }

  angular
    .module('blogApp')
    .config(['$routeProvider', config]);

})();