import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitZip() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    }
  }
});
