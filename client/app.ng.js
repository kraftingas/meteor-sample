angular.module('meteor-sample', ['angular-meteor', 'ui.router']);

angular.module('meteor-sample').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'client/posts-list.ng.html',
        controller: 'PostsListCtrl'
      })
      .state('postDetails', {
        url: '/posts/:postId',
        templateUrl: 'client/post-details.ng.html',
        controller: 'PostsDetailsCtrl'
      });

    $urlRouterProvider.otherwise('/posts');
  }
]);

angular.module('meteor-sample').controller('PostsListCtrl', ['$scope', '$meteor', function($scope, $meteor) {
  $scope.posts = $meteor.collection(Posts);

  $scope.save = function(post) {
    $scope.posts.save(post);
  };

  $scope.remove = function(post) {
    $scope.posts.remove(post);
  };

  $scope.removeAll = function() {
    $scope.posts.remove();
  };
}]);

angular.module('meteor-sample').controller('PostsDetailsCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {
    $scope.postId = $stateParams.postId;
  }
]);
