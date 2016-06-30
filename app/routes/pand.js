import Ember from 'ember';
import ENV from '../config/environment';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  imageStorage: storageFor('image'),

  model(params) {
    return {
      src: `${ENV.rootURL}images/portefeuille/square_${params.name}.jpg`,
      name: params.name
    };
  },

  afterModel(model/*, transition*/) {
    this.set('imageStorage.dataURL', model.src);
  }
});
