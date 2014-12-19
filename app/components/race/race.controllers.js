angular

  .module('gpquery.race')

  .controller('RaceController', function($scope, $stateParams, $state, RaceService)  {
    $scope.raceId = $stateParams.raceId;
    // race details
    $scope.race = RaceService.getRace($stateParams.raceId);

  });