(function() {

  angular
    .module('blogApp')
    .service('blogData', blogData);

  loc8rData.$inject = ['$http'];
  function blogData ($http) {
    var loadPosts = function () {
      return $http.get('/api/blog');
    };
    var addPosts = function () {
      return $http.post('/api/blog');
    };
    return {
      blogData : blogData,
      addPosts :addPosts
    };
  }

})();