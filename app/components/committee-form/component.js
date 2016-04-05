import Ember from 'ember';

export default Ember.Component.extend({
  chambers: Ember.String.w('house senate joint'),
  actions: {
    selectChamber() {
      var committeeParams = {
        chamber: this.get('chamber')
      };
      this.sendAction('sendCommittee', committeeParams);
    }
  }
});
