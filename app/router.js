import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pand', {path: ':name'}, function() {
    // this.route('form');
    this.route('icon');
    this.route('success');
  });
});

export default Router;
