angular

  .module('gpquery.races')

  .controller('RacesController', function($scope, $state, RacesService)  {

    $scope.racesFilter = null;
    $scope.racesLimit = 10;

    // races list
    $scope.races = RacesService.listRaces();

    // race details
    $scope.raceDetails = function(raceId) {
      
    }

  });