'use strict';

var hbApp = angular.module('hbApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'ui.bootstrap',
  'infinite-scroll'
])

hbApp.config(function($locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
})
