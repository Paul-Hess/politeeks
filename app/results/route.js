import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var request = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=8e957463652f4bd4a926700a89aab085&zip=' + params.zip;
    return Ember.$.getJSON(request).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
