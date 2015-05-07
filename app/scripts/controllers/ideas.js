'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:IdeasCtrl
 * @description
 * # IdeasCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('IdeasCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.posts = [
		{idea: 'A cold glass of iced-tea is very satisfying on a swelteringly hot day.', upvotes: 5},
		{idea: 'There should be an app for making things happen.', upvotes: 2}

	];
	$scope.users = [
		{username: 'xhad', position: 'developer'}
	];
	$scope.addPost = function() {
		if(!$scope.idea || $scope.idea === '') { return; }
		$scope.posts.push({idea: $scope.idea, upvotes: 0});
		$scope.idea = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
  });
