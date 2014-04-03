'use strict';

var hbApp = angular.module('hbApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'ui.bootstrap',
  'infinite-scroll'
])

hbApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})
