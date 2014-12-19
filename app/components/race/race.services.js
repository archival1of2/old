angular

  .module('gpquery.race')

  .factory('RaceService', function($resource) {

    var resource = $resource('../api/index.php/race/:raceId', {raceId: '@raceId'},
    { query: {method:'GET', isArray:false}});

    resource.getRace = function(raceId) {
      return this.query({raceId: raceId});
    }

    return resource;

  });