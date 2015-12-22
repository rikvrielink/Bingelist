angular.module('BingeList').controller('IndexController', function ($scope, $log, $routeParams, ListService) {
    'use strict';
    $scope.derp = {};

    $scope.getList = function(category){
        ListService.getCategory(category).then(function (result) {
            $log.log(result);
            $scope.items = result.items;
        }).catch(function (err) {
            $log.log(err);
        });
    };

    if($routeParams.category !== undefined) {
        $scope.getList($routeParams.category);
    } else {
        $scope.getList('shows');
    }

});