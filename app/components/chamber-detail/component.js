import Ember from 'ember';

export default Ember.Component.extend({
  subCommitteeParams: null,
  showSubcommittees: false,
  actions: {
    showDetails()  {
      // console.log("committee", commiee);
      var params = {
        committee_id: this.get('committee')[0].parent_committee_id,
        chamber: this.get('committee')[0].chamber
      }
      var request = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=8e957463652f4bd4a926700a89aab085';
      // console.log("id: ", id);
      var self = this;
      return Ember.$.getJSON(request).then(function(responseJSON) {
        // if(self.showSubcommittees === true) {
        //   self.set('showSubcommittees', false);
        // } else {
          self.set('showSubcommittees', true);
          self.set('subCommitteeParams', responseJSON.results);
        // }
        // return responseJSON.results;
      });
    }
  }
});
