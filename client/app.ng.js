angular.module('meteor-sample', ['angular-meteor']);

angular.module('meteor-sample').controller('PostsListCtrl', ['$scope', '$meteor', function($scope, $meteor) {
  $scope.posts = $meteor.collection(Posts);
}]);
