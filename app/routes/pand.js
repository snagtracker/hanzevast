import Ember from 'ember';
import ENV from '../config/environment';
import { storageFor } from 'ember-local-storage';

const {
  inject: {
    service
  },
  String: {
    capitalize
  }
} = Ember;

export default Ember.Route.extend({
  imageStorage: storageFor('image'),
  headData: service(),

  model(params) {
    return {
      src: `${ENV.rootURL}images/portefeuille/square_${params.name}.jpg`,
      name: params.name.split('-').map((p) => capitalize(p)).join(' ')
    };
  },

  afterModel(model/*, transition*/) {
    this.set('imageStorage.dataURL', model.src);
    this.set('headData.title', model.name);
  }
});
