import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log("got to model on committee pg");
    var request = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&apikey=8e957463652f4bd4a926700a89aab085';
    console.log('params.chamber', params.chamber)
    return Ember.$.getJSON(request).then(function(responseJSON) {
      console.log("response:", responseJSON.results);
      return responseJSON.results;
    });
  }
});
