/**
 * Created by Safsaf on 6/13/2016.
 */
var app = angular.module('caffeinehit.filters', []);

app.filter("join", function () {
	return function (arr, sep) {
		return arr.join(sep);
	};
});