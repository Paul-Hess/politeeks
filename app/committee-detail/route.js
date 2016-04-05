import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = params.id;
    var url= 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + id + '&apikey=8e957463652f4bd4a926700a89aab085';

    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
