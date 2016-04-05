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
      var _this = this;
      return Ember.$.getJSON(request).then(function(responseJSON) {
        if(_this.showSubcommittees === true) {
          _this.set('showSubcommittees', false);
        } else {
          _this.set('showSubcommittees', true);
          _this.set('subCommitteeParams', responseJSON.results);
        }
        console.log(_this.subCommitteeParams);
        return responseJSON.results;
      });
    }
  }
});
