angular

  .module('gpquery.races')

  .factory('RacesService', function($resource) {

    var resource = $resource('../api/index.php/races/:year', {year: '@year'},
    { query: {method: 'GET', isArray:true}});

    // list all races; allow front-end to filter
    resource.listRaces = function() {
      return this.query();
    }

    return resource;

  });