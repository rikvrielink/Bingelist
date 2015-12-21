angular.module('BingeList').controller('IndexController', function ($scope, $log, ListService) {
    'use strict';
    $scope.derp = {};

    ListService.getCategory('shows').then(function (result) {
        $log.log(result);
        $scope.shows = result.plain();
    }).catch(function (err) {
        $log.log(err);
    });
});