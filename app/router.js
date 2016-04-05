import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee', {path: '/committee/:chamber'});
  this.route('committee-detail', {path:'/committee-detail/:id'});
});

export default Router;
