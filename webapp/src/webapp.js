var app = angular.module('BingeList', ['ngRoute', 'restangular']);

app.config(function (RestangularProvider, $locationProvider, $routeProvider, CONFIG) {
    'use strict';
    RestangularProvider.setBaseUrl(CONFIG.BACKEND_URL+ '/api');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.when('/', {
        controller: 'IndexController',
        templateUrl: '/templates/home.html'
    }).when('/lists/:category', {controller: 'IndexController', templateUrl: '/templates/home.html'}).otherwise('/');
});


app.run(function ($rootScope, CONFIG) {
    'use strict';
    $rootScope.CONFIG = CONFIG;
});