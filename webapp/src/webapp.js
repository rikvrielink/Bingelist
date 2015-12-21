var app = angular.module('BingeList', ['ngRoute', 'restangular']);

app.config(function (RestangularProvider, $locationProvider, $routeProvider, CONFIG) {
    'use strict';
    RestangularProvider.setBaseUrl('http://'+CONFIG.BACKEND_URL+'/Bingelist/server/public/api');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.when('/', {
        controller: 'IndexController',
        templateUrl: '/templates/home.html'
    }).when('/lists/:category', {controller: 'IndexController', templateUrl: '/templates/home.html'}).otherwise('/');
});


app.run(function ($rootScope) {
    'use strict';
    $rootScope.APP = {
        VERSION: '0.1'
    };
});