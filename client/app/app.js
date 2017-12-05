'use strict';

angular.module('paraisoCiclistaApp', ['paraisoCiclistaApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router', 'ui.bootstrap'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
