angular.module('meteor-sample', ['angular-meteor']);

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
