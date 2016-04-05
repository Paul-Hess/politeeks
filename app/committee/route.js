import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var request = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&apikey=8e957463652f4bd4a926700a89aab085';

    return Ember.$.getJSON(request).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
