import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },

    sendCommittee(committeeParams) {
      this.transitionTo('committee', committeeParams.chamber);
    }
  }
});
