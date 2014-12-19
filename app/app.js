angular.module('gpquery', [
  'ngResource', 'ngAnimate',
  'ui.bootstrap', 'ui.router',
  'gpquery.race', 'gpquery.races'
])

// move this into new app.config file
.config(function($stateProvider, $urlRouterProvider)  {
  $urlRouterProvider
    .otherwise("");


  $stateProvider
    .state("race", {
      url: "/race/:raceId",
      templateUrl: "components/race/race.html",
      controller: "RaceController"
    })

});