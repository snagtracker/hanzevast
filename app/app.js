import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

// window.addToHomescreen.removeSession();
/*let addtohome =*/ window.addToHomescreen({
  // debug: true,
  maxDisplayCount: 1,
  skipFirstVisit: true,
  startDelay: 5, // seconds
  // displayPace: 24 * 60, // minutes
  lifespan: 30, // seconds
  // autostart: false
});
// addtohome.show();

export default App;
