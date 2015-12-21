angular.module('BingeList').service('ListService', function (Restangular) {
    'use strict';

    var lists = Restangular.all('list');

    this.getCategory = function (category) {
        return lists.get(category);
    };
});