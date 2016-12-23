(function () {

  angular
    .module('blogApp')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl ($scope, blogApp) {
   $scope.posts= [];

   blogApp.blogData()success(function(data) {
          $scope.posts=data;
   })


  }
})();