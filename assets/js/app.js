(function(){
  'use strict';

  angular.module('ShingoRabi', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize', 'angularMoment', 'dragulaModule'])
  .config(function($routeProvider, $mdThemingProvider){
    $routeProvider
    .when('/',{
      templateUrl: 'templates/dashboard.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    var shingoRedMap = $mdThemingProvider.extendPalette('red', {
      '500': '#640921'
    });

    var shingoBlueMap = $mdThemingProvider.extendPalette('blue', {
      '500': '#003768'
    });

    $mdThemingProvider.definePalette('shingoBlue', shingoBlueMap);
    $mdThemingProvider.definePalette('shingoRed', shingoRedMap);
    $mdThemingProvider.theme('default')
    .primaryPalette('shingoBlue', { 'default': '500' })
    .accentPalette('shingoRed', { 'default': '500' });
  });

  angular.module('ShingoRabi').constant('_', _);
})();
