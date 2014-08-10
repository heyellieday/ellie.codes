'use strict';

/**
 * @ngdoc overview
 * @name elliecodesApp
 * @description
 * # elliecodesApp
 *
 * Main module of the application.
 */
var app = angular
  .module('elliecodesApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  var i = 0;
  var languages =['ruby', 'javascript'];
  var prepositions =['for', 'with'];

  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/index.html'
    });

    for (i = 0; i < prepositions.length; i++) {
	    $stateProvider.state(prepositions[i], {
	      url: '/'+prepositions[i],
	      templateUrl: 'views/'+prepositions[i]+'.html'
	    });
    }
    for (i = 0; i < languages.length; i++) {
	    $stateProvider.state('with.'+languages[i], {
	      url: '/'+languages[i],
	      templateUrl: 'views/with.'+languages[i]+'.html'
	    });
    }
    $locationProvider.html5Mode(true);
});
