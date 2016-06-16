/**
 * Created by Safsaf on 6/13/2016.
 */
var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;
	$scope.doRefresh=function(){

		if (!$scope.yelp.isLoading){

			$scope.yelp.refresh().then(function(){

				$scope.$broadcast('scroll.refreshComplete');

			})
		}
	}
	$scope.loadMore=function (){
		console.log("loadMore");
		if (!$scope.yelp.isLoading && $scope.yelp.hasMore ){

			$scope.yelp.next().then(function(){

				$scope.$broadcast('scroll.infiniteScrollComplete');

			});
		};
	};

	$scope.getDirections=function(cafe){

		console.log("Getting directions for cafe");


	};


	$scope.openMap=function(cafe){

		console.log("opening cafe in maps app");


	};
});

